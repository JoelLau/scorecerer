import { render, screen } from '@testing-library/react';
import FormControlButtonRadio from './form-control-button-radio';

describe(`given 'FormControlButtonRadio'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(
      <FormControlButtonRadio type="radio" id="asdf" name="asdf" />
    );
    expect(baseElement).toBeTruthy();
  });

  describe(`when given classNames`, () => {
    const testClass = 'test-class-one test-class-two';

    it(`should apply test classes`, () => {
      render(
        <FormControlButtonRadio
          className={testClass}
          type="radio"
          id="asdf"
          name="asdf"
        />
      );

      const buttonRadio = screen.getByTestId('button-radio-label');
      expect(buttonRadio.className).toContain('test-class-one');
      expect(buttonRadio.className).toContain('test-class-two');
    });
  });
});
