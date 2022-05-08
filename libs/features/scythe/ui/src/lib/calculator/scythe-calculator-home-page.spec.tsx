import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ScytheCalculatorHomePage from './scythe-calculator-home-page';

describe(`given 'ScytheCalculatorHomePage'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<ScytheCalculatorHomePage />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
