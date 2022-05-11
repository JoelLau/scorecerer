import React, { BaseSyntheticEvent, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import {
  ScytheCalculatorScorePieces,
  ScytheCalculatorScorePiecesI,
} from './score-pieces/scythe-calculator-score-pieces.class';
import {
  ScytheCalculatorStep,
  ScytheCalculatorStepHome,
  scytheCalculatorSteps,
  ScytheCalculatorStepScore,
  stepIdtoScorePiecesKeyMap,
} from './steps';

/* eslint-disable-next-line */
export interface ScytheCalculatorRouterProps {}

export const ScytheCalculatorRouter = (props: ScytheCalculatorRouterProps) => {
  const navigate = useNavigate();

  const steps = scytheCalculatorSteps;
  const firstStepUrl = steps[0].id;

  const [score, setScore] = useState<ScytheCalculatorScorePieces>(
    new ScytheCalculatorScorePieces()
  );

  const updateScorePiece = (
    key: keyof ScytheCalculatorScorePiecesI,
    value: string | number
  ) => {
    switch (key) {
      case 'faction':
        score[key] = value as string;
        break;
      case 'playerCount':
      case 'popularity':
      case 'stars':
      case 'territories':
      case 'resources':
      case 'structureBonus':
      case 'encounterTerritories':
      default:
        score[key] = value as number;
        break;
    }
    setScore(new ScytheCalculatorScorePieces(score));
  };

  return (
    <Routes>
      <Route
        index
        element={<ScytheCalculatorStepHome firstStepUrl={firstStepUrl} />}
      />
      {steps.map(({ id, ...stepProps }, index, arr) => (
        <Route
          key={id}
          path={id}
          element={
            <div className="flex flex-row items-start">
              <ScytheCalculatorStep
                currentIndex={index}
                steps={arr}
                value={score[stepIdtoScorePiecesKeyMap[id]]}
                onSubmit={(event: BaseSyntheticEvent) => {
                  event.preventDefault();

                  updateScorePiece(
                    stepIdtoScorePiecesKeyMap[id],
                    event.target[0].value
                  );

                  navigate(
                    index === arr.length - 1 ? 'score' : steps[index + 1].id
                  );
                }}
                onChange={(event: BaseSyntheticEvent) => {
                  updateScorePiece(
                    stepIdtoScorePiecesKeyMap[id],
                    event.target.value
                  );
                }}
                {...stepProps}
              />
              <pre>{JSON.stringify(score, null, 2)}</pre>
            </div>
          }
        />
      ))}
      <Route
        path="score"
        element={
          <ScytheCalculatorStepScore
            firstStepUrl={firstStepUrl}
            scorePieces={score}
          />
        }
      />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};

export default ScytheCalculatorRouter;
