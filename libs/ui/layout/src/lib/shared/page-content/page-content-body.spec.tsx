import { render } from '@testing-library/react';

import PageContentBody from './page-content-body';

describe('PageContentBody', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageContentBody />);
    expect(baseElement).toBeTruthy();
  });
});
