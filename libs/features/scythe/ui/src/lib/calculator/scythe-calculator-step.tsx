import {
  Button,
  Card,
  FormControlButtonRadioGroup,
  Typography,
} from '@scorecerer/ui/components';
import { PageLayoutStacked } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { scytheCalculatorFactionOptions } from './scythe-calculator-faction-options';

/* eslint-disable-next-line */
export interface ScytheCalculatorStepProps {}

export function ScytheCalculatorStep(props: ScytheCalculatorStepProps) {
  const navigate = useNavigate();

  const onSubmit = (event: BaseSyntheticEvent) => {
    navigate('../stars');
  };

  const onPreviousButtonClick = (event: BaseSyntheticEvent) => {
    navigate('../');
  };

  return (
    <PageLayoutStacked>
      <Card className="mt-6">
        <form
          className="flex flex-col items-start w-full pt-3 justify-evenly gap-y-10"
          onSubmit={onSubmit}
        >
          <Typography variant="h1">
            1.&nbsp;&nbsp;Which faction <br />
            did you pick?
          </Typography>
          <div className="flex flex-col w-full gap-y-1">
            <FormControlButtonRadioGroup
              options={scytheCalculatorFactionOptions}
            />
          </div>
          <div className="flex flex-col w-full gap-y-2">
            <Button
              type="submit-button"
              variant="cta"
              className="flex w-full flex-start"
            >
              <Typography variant="button">Next</Typography>
            </Button>
            <Button
              type="simple-button"
              className="flex w-full flex-start"
              onClick={onPreviousButtonClick}
            >
              <Typography variant="button">Previous</Typography>
            </Button>
          </div>
        </form>
      </Card>
    </PageLayoutStacked>
  );
}

export default ScytheCalculatorStep;
