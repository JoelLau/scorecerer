import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import {
  ScytheCalculatorScorePieces,
  ScytheCalculatorScorePiecesI,
} from './score-pieces/scythe-calculator-score-pieces.class';
import {
  ScytheCalculatorStep,
  ScytheCalculatorStepHome,
  ScytheCalculatorStepItem,
  scytheCalculatorSteps,
  ScytheCalculatorStepScore,
  stepIdtoScorePiecesKeyMap,
} from './steps';

/* eslint-disable-next-line */
export interface ScytheCalculatorRouterProps {
  title?: string;
}

export const ScytheCalculatorRouter = ({
  title,
  ...props
}: ScytheCalculatorRouterProps) => {
  const navigate = useNavigate();

  const steps = scytheCalculatorSteps;
  const firstStepUrl = steps[0].id;

  const [score, setScore] = useState<ScytheCalculatorScorePieces>(
    new ScytheCalculatorScorePieces()
  );

  const updateScore = (
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

  const resetScore = () => {
    setScore(new ScytheCalculatorScorePieces());
  };

  useEffect(() => {
    if (!title) return;

    document.title = title;
  }, [title]);

  const onStepSubmitCallback = (
    event: BaseSyntheticEvent,
    id: ScytheCalculatorStepItem['id'],
    index: number,
    steps: ScytheCalculatorStepItem[]
  ) => {
    event.preventDefault();

    const key = stepIdtoScorePiecesKeyMap[id];
    const value = (event.target[0] || event.target).value;
    updateScore(key, value);

    const isLastPage = index === steps.length - 1;
    const nextPageUrl = steps[index + 1].id;
    navigate(isLastPage ? 'score' : nextPageUrl);
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
            <ScytheCalculatorStep
              currentIndex={index}
              steps={arr}
              value={score[stepIdtoScorePiecesKeyMap[id]]}
              onSubmit={(event: BaseSyntheticEvent) =>
                onStepSubmitCallback(event, id, index, arr)
              }
              onChange={(event: BaseSyntheticEvent) => {
                updateScore(stepIdtoScorePiecesKeyMap[id], event.target.value);
              }}
              {...stepProps}
            />
          }
        />
      ))}
      <Route
        path="score"
        element={
          <ScytheCalculatorStepScore
            onReset={(event: BaseSyntheticEvent) => {
              resetScore();
              navigate(firstStepUrl);
            }}
            scorePieces={score}
          />
        }
      />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};

export default ScytheCalculatorRouter;
