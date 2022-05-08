import { render } from '@testing-library/react';

import PageLayoutStackedContents from './page-layout-stacked-contents';

describe('PageLayoutStackedContents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLayoutStackedContents />);
    expect(baseElement).toBeTruthy();
  });
});
