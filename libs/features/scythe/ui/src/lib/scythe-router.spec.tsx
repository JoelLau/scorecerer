import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScytheRouter from './scythe-router';

describe(`given 'ScytheRouter'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<ScytheRouter />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });
});
