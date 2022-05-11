import { render } from '@testing-library/react';

import ScytheCalculatorStepScore from './scythe-calculator-step-score';

describe('ScytheCalculatorStepScore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScytheCalculatorStepScore />);
    expect(baseElement).toBeTruthy();
  });
});
