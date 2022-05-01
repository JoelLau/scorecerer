import { render } from '@testing-library/react';
import ScytheUi from './scythe-ui';

describe('ScytheUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScytheUi />);
    expect(baseElement).toBeTruthy();
  });
});
