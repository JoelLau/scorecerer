import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ScytheCalculatorRouter from './scythe-calculator-router';

describe('ScytheCalculatorRouter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScytheCalculatorRouter />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
