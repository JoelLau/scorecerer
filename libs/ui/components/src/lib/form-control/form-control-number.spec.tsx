import { render } from '@testing-library/react';

import FormControlNumber from './form-control-number';

describe('FormControlNumber', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormControlNumber />);
    expect(baseElement).toBeTruthy();
  });
});
