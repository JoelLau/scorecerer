import { render } from '@testing-library/react';

import ScytheTest from './scythe-test';

describe('ScytheTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScytheTest />);
    expect(baseElement).toBeTruthy();
  });
});
