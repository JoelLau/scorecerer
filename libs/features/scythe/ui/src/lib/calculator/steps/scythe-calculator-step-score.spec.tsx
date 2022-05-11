import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ScytheCalculatorScorePieces } from '../score-pieces';
import ScytheCalculatorStepScore from './scythe-calculator-step-score';

const defaultProps = {
  firstStepUrl: 'test',
  scorePieces: new ScytheCalculatorScorePieces(),
};

describe(`given 'ScytheCalculatorStepScore'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(
      <ScytheCalculatorStepScore {...defaultProps} />,
      { wrapper: MemoryRouter }
    );
    expect(baseElement).toBeTruthy();
  });
});
