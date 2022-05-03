import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ScytheTest from './scythe-test';

describe('ScytheTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScytheTest />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });
});
