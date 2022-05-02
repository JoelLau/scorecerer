import { render } from '@testing-library/react';

import PageContentHeader from './page-content-header';

describe('PageContentHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageContentHeader />);
    expect(baseElement).toBeTruthy();
  });
});
