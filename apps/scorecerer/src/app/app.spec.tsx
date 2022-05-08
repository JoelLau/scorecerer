import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

describe(`given 'App'`, () => {
  it(`should render`, () => {
    const { baseElement } = render(<App />, { wrapper: MemoryRouter });
    expect(baseElement).toBeTruthy();
  });
});
