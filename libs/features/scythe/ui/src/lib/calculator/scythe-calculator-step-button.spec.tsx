import { render } from '@testing-library/react';

import ScytheCalculatorStepButton from './scythe-calculator-step-button';

describe('ScytheCalculatorStepButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScytheCalculatorStepButton />);
    expect(baseElement).toBeTruthy();
  });
});
