import React, { BaseSyntheticEvent, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ScytheCalculatorStep from './scythe-calculator-step';
import ScytheCalculatorStepHome from './scythe-calculator-step-home';
import ScytheCalculatorStepScore, {
  ScytheScorePieces,
} from './scythe-calculator-step-score';
import { scytheCalculatorSteps } from './scythe-calculator-steps';

/* eslint-disable-next-line */
export interface ScytheCalculatorRouterProps {}

export const ScytheCalculatorRouter = (props: ScytheCalculatorRouterProps) => {
  const navigate = useNavigate();

  const steps = scytheCalculatorSteps;
  const firstStepUrl = steps[0].id;

  const [score, setScore] = useState<ScytheScorePieces>({
    playerCount: 0,
    faction: '',
    popularity: 0,
    stars: 0,
    territories: 0,
    resources: 0,
    structureBonus: 0,
    encounterTerritories: 0,
  });

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
              onSubmit={(event: BaseSyntheticEvent) =>
                navigate(
                  index === arr.length - 1 ? 'score' : steps[index + 1].id
                )
              }
              {...stepProps}
            />
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
