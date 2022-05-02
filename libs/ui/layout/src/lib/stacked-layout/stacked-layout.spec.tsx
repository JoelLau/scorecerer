import { render } from '@testing-library/react';

import StackedLayout from './stacked-layout';

describe('StackedLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StackedLayout />);
    expect(baseElement).toBeTruthy();
  });
});
