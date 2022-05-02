import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StackedLayout from './stacked-layout';

describe('StackedLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StackedLayout />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
