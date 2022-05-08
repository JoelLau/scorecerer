import { render } from '@testing-library/react';

import PageLayoutStacked from './page-layout-stacked';

describe('PageLayoutStacked', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLayoutStacked />);
    expect(baseElement).toBeTruthy();
  });
});
