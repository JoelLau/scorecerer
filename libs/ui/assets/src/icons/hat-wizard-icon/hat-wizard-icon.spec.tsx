import { render } from '@testing-library/react';

import HatWizardIcon from './hat-wizard-icon';

describe('HatWizardIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HatWizardIcon />);
    expect(baseElement).toBeTruthy();
  });
});
