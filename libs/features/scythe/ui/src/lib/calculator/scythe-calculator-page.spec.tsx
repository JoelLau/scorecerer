import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ScytheCalculatorPage from './scythe-calculator-page';

describe('ScytheCalculatorPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScytheCalculatorPage />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
