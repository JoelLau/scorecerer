import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ScythePage from './scythe-page';

describe('ScythePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScythePage />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });
});
