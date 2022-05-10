import { Button, Typography } from '@scorecerer/ui/components';
import { BaseSyntheticEvent } from 'react';

export interface ScytheCalculatorStepButtonProps {
  variant: 'getting-started' | 'next' | 'previous' | 'final' | 'reset';
  onClick?: (event: BaseSyntheticEvent) => unknown;
}

export function ScytheCalculatorStepButton({
  variant,
  ...props
}: ScytheCalculatorStepButtonProps) {
  switch (variant) {
    case 'getting-started':
      return (
        <Button
          type="submit-button"
          variant="cta"
          className="flex w-full flex-start"
          {...props}
        >
          <Typography variant="button">Get Started</Typography>
        </Button>
      );
    case 'previous':
      return (
        <Button
          type="simple-button"
          className="flex w-full flex-start"
          {...props}
        >
          <Typography variant="button">Previous</Typography>
        </Button>
      );
    case 'final':
      return (
        <Button
          type="submit-button"
          variant="cta"
          className="flex w-full flex-start"
          {...props}
        >
          <Typography variant="button">See Final Score</Typography>
        </Button>
      );
    case 'reset':
      return (
        <Button
          type="reset-button"
          variant="cta"
          className="flex w-full flex-start"
          {...props}
        >
          <Typography variant="button">Start Over</Typography>
        </Button>
      );
    case 'next':
    default:
      return (
        <Button
          type="submit-button"
          variant="cta"
          className="flex w-full flex-start"
          {...props}
        >
          <Typography variant="button">Next</Typography>
        </Button>
      );
  }
}

export default ScytheCalculatorStepButton;
