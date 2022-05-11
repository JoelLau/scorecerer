import { render, screen } from '@testing-library/react';
import ScytheCalculatorStepButton, {
  ScytheCalculatorStepButtonProps,
} from './scythe-calculator-step-button';

describe(`given 'ScytheCalculatorStepButton'`, () => {
  it(`should render successfully`, () => {
    const { baseElement } = render(
      <ScytheCalculatorStepButton variant="getting-started" />
    );
    expect(baseElement).toBeTruthy();
  });

  describe.each([
    ['getting-started'],
    ['previous'],
    ['final'],
    ['reset'],
    ['next'],
  ])('when given variant %s', (variant) => {
    it('should render successfully', () => {
      const testId = 'scythe-calculator-step-button';
      render(
        <ScytheCalculatorStepButton
          variant={variant as ScytheCalculatorStepButtonProps['variant']}
          data-testid={testId}
        />
      );
      const stepButton = screen.getByTestId(testId);
      expect(stepButton).toBeInTheDocument();
    });
  });
});
