import { render } from '@testing-library/react';

import PageLayoutStackedBackground from './page-layout-stacked-background';

describe('PageLayoutStackedBackground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageLayoutStackedBackground />);
    expect(baseElement).toBeTruthy();
  });
});
