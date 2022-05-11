import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ScytheCalculatorStepHome from './scythe-calculator-step-home';

const defaultProps = {
  firstStepUrl: 'test',
};

describe(`given 'ScytheCalculatorStepHome`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(
      <ScytheCalculatorStepHome {...defaultProps} />,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(baseElement).toBeTruthy();
  });
});
