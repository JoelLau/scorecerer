import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PageLayoutStacked from './page-layout-stacked';

describe(`given 'PageLayoutStacked'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<PageLayoutStacked />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});
