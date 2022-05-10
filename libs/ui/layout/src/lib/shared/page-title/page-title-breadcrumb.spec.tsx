import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageTitleBreadcrumb from './page-title-breadcrumb';

const defaultProps = {
  pieces: [{ children: 'Home', to: '/' }]
}

describe(`given 'PageTitleBreadcrumb'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<PageTitleBreadcrumb {...defaultProps} />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });
});
