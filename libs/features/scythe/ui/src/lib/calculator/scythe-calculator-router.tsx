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
    () => new ScytheCalculatorScorePieces()
  );
  const [hasCalculatedScore, setHasCalculatedScore] = useState<boolean>(false);

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

    setScore(new ScytheCalculatorScorePieces(score));
  };

  const resetScore = () => {
    setHasCalculatedScore(false);
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
      {steps.map(({ id, ...stepProps }, index, arr) => {
        const key = `${id}`;
        return (
          <Route
            key={key}
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
                  updateScore(
                    stepIdtoScorePiecesKeyMap[id],
                    event.target.value
                  );
                }}
                hasCompletedScore={hasCalculatedScore}
                {...stepProps}
                key={key}
              />
            }
          />
        );
      })}
      <Route
        path="score"
        element={
          <ScytheCalculatorStepScore
            onLoad={() => setHasCalculatedScore(true)}
            onReset={() => {
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
