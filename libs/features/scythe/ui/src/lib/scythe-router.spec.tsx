import { render } from '@testing-library/react';
import ScytheRouter from './scythe-router';

describe('ScytheRouter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScytheRouter />);
    expect(baseElement).toBeTruthy();
  });
});
