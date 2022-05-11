import { render } from '@testing-library/react';

import FormControlButtonRadioGroup from './form-control-button-radio-group';

const defaultProps = {
  options: []
}

describe(`given 'FormControlButtonRadioGroup'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<FormControlButtonRadioGroup {...defaultProps} />);
    expect(baseElement).toBeTruthy();
  });
});
