import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageHeader from './page-header';

describe('PageHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageHeader />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
