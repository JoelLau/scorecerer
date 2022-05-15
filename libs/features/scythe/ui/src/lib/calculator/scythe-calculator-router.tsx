import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import {
  ScytheCalculatorScorePieces,
  ScytheCalculatorScorePiecesI,
} from './score-pieces/scythe-calculator-score-pieces.class';
import {
  ScytheCalculatorEncounterTerritoriesStepItem,
  ScytheCalculatorPolaniaSpecialStepItem,
  ScytheCalculatorStep,
  ScytheCalculatorStepHome,
  ScytheCalculatorStepItem,
  scytheCalculatorSteps,
  ScytheCalculatorStepScore,
  stepIdtoScorePiecesKeyMap,
} from './steps';

export interface ScytheCalculatorRouterProps {
  title?: string;
}

export const ScytheCalculatorRouter = ({
  title,
}: ScytheCalculatorRouterProps) => {
  const navigate = useNavigate();

  const [score, setScore] = useState<ScytheCalculatorScorePieces>(
    new ScytheCalculatorScorePieces()
  );

  const steps = [
    ...scytheCalculatorSteps,
    ScytheCalculatorPolaniaSpecialStepItem,
    ...(score.polaniaSpecial === 'polania-special-true'
      ? [ScytheCalculatorEncounterTerritoriesStepItem]
      : []),
  ];
  const firstStepUrl = steps[0].id;

  const updateScore = (
    key: keyof ScytheCalculatorScorePiecesI,
    value: string | number
  ) => {
    switch (key) {
      case 'faction':
      case 'polaniaSpecial':
        score[key] = value as string;
        break;
      case 'playerCount':
      case 'popularity':
      case 'stars':
      case 'territories':
      case 'resources':
      case 'structureBonus':
      case 'encounterTerritories':
      case 'coins':
      default:
        score[key] = value as number;
        break;
    }

    console.log(key);
    console.log(value);
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
    const value = event.target.value;
    updateScore(key, value);

    const isLastPage = index === steps.length - 1;
    navigate(isLastPage ? 'score' : steps[index + 1].id);
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
                console.log(event);
                console.log(event.target.value);
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
            steps={steps}
          />
        }
      />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};

export default ScytheCalculatorRouter;
