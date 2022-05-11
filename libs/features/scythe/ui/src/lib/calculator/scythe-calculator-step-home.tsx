import { BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ScytheCalculatorStep from './scythe-calculator-step';

/* eslint-disable-next-line */
export interface ScytheCalculatorStepHomeProps {
  firstStepUrl: string;
}

export function ScytheCalculatorStepHome({
  firstStepUrl,
}: ScytheCalculatorStepHomeProps) {
  const navigate = useNavigate();

  return (
    <ScytheCalculatorStep
      onSubmit={(event: BaseSyntheticEvent) => navigate(firstStepUrl)}
    >
      <img
        src="../assets/images/scythe-board.png"
        alt="Scythe Board"
        className="w-full rounded-lg"
      />
    </ScytheCalculatorStep>
  );
}

export default ScytheCalculatorStepHome;
