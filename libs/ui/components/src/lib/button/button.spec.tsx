import { render, screen } from '@testing-library/react';
import Button, { ButtonProps } from './button';

describe(`given 'Button'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  describe(`when given classNames`, () => {
    const testId = 'button-component';
    const testClass = 'test-class-one test-class-two';

    it(`should apply test classes`, () => {
      render(<Button className={testClass} data-testid={testId} />);

      const button = screen.getByTestId(testId);
      expect(button.className).toContain('test-class-one');
      expect(button.className).toContain('test-class-two');
    });
  });

  describe.each([
    ['submit-button', 'button', 'submit'],
    ['reset-button', 'button', 'reset'],
    ['simple-button', 'button', 'button'],
  ])(`when type type is '%s'`, (type, role, typeAttributeValue) => {
    const testId = 'button';

    it(`should render as a HTML ${role}`, () => {
      render(
        <Button type={type as ButtonProps['type']} data-testid={testId} />
      );

      const button = screen.getByTestId(testId);
      expect(button).toBe(screen.getByRole(role));
    });

    it(`should have type attribute ${typeAttributeValue}`, () => {
      render(
        <Button type={type as ButtonProps['type']} data-testid={testId} />
      );

      const button = screen.getByTestId(testId);
      expect(button).toHaveAttribute('type', typeAttributeValue);
    });
  });

  describe.each([
    ['cta', 'test-button-cta'],
    ['default', 'test-button-default'],
    ['disabled', 'test-button-disabled'],
  ])(`when variant variant is '%s'`, (variant, className) => {
    const testId = 'button';
    it(`should render class '${className}'`, () => {
      render(
        <Button
          variant={variant as ButtonProps['variant']}
          data-testid={testId}
        />
      );
      const button = screen.getByTestId(testId);
      expect(button).toBeInTheDocument();
      expect(button.className).toContain('test-button-base');
      expect(button.className).toContain(className);
    });
  });

  describe(`when disabled`, () => {
    const testId = 'button';
    const className = 'test-button-disabled';
    it(`should render class '${className}'`, () => {
      render(<Button data-testid={testId} disabled />);
      const button = screen.getByTestId(testId);

      expect(button).toBeInTheDocument();
      expect(button.className).toContain('test-button-base');
      expect(button.className).toContain(className);
    });
  });
});
