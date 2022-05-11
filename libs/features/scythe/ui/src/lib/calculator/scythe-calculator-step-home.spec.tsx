import { render } from '@testing-library/react';

import ScytheCalculatorStepHome from './scythe-calculator-step-home';

describe('ScytheCalculatorStepHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScytheCalculatorStepHome />);
    expect(baseElement).toBeTruthy();
  });
});
