import React, { BaseSyntheticEvent } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ScytheCalculatorStep from './scythe-calculator-step';
import { scytheCalculatorSteps } from './scythe-calculator-steps';

/* eslint-disable-next-line */
export interface ScytheCalculatorRouterProps {}

const steps = scytheCalculatorSteps;

export const ScytheCalculatorRouter = (props: ScytheCalculatorRouterProps) => {
  const navigate = useNavigate();

  const calculatorHome = (
    <ScytheCalculatorStep
      onSubmit={(event: BaseSyntheticEvent) => navigate(steps[0].id)}
    >
      <img
        src="../assets/images/scythe-board.png"
        alt="Scythe Board"
        className="w-full rounded-lg"
      />
    </ScytheCalculatorStep>
  );

  const calculatorFinal = (
    <ScytheCalculatorStep
      onSubmit={(event: BaseSyntheticEvent) => navigate(steps[0].id)}
    >
      <img
        src="../assets/images/scythe-board.png"
        alt="Scythe Board"
        className="w-full rounded-lg"
      />
    </ScytheCalculatorStep>
  );

  return (
    <Routes>
      <Route index element={calculatorHome} />
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
      <Route path="score" element={calculatorFinal} />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};

export default ScytheCalculatorRouter;
