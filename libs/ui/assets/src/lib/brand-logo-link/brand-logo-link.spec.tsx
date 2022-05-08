import { render } from '@testing-library/react';

import BrandLogoLink from './brand-logo-link';

describe(`given 'BrandLogoLink'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<BrandLogoLink />);
    expect(baseElement).toBeTruthy();
  });
});
