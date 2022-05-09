import { render, screen } from '@testing-library/react';

import FormControl, { FormControlProps } from './form-control';

describe(`given 'FormControl'`, () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormControl />);
    expect(baseElement).toBeTruthy();
  });

  describe.each([
    ['button-radio', 'form-control-button-radio'],
    ['number', 'form-control-number'],
    ['text', 'form-control-others'],
  ])('when variant is %s', (variant, testId) => {
    it(`should render the correct component (${testId})`, () => {
      render(<FormControl variant={variant as FormControlProps['variant']} />);
      const element = screen.getByTestId(testId);

      expect(element).toBeInTheDocument();
    });
  });
});
