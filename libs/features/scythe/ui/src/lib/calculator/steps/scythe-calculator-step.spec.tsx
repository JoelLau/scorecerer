import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ScytheCalculatorStep from './scythe-calculator-step';

describe(`given 'ScytheCalculatorStep'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<ScytheCalculatorStep />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
