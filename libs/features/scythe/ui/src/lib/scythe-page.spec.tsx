import { render } from '@testing-library/react';
import ScythePage from './scythe-page';

describe('ScythePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScythePage />);
    expect(baseElement).toBeTruthy();
  });
});
