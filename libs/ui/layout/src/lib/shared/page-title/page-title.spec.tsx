import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import PageTitle from './page-title';

describe(`given 'PageTitle'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<PageTitle />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });
});
