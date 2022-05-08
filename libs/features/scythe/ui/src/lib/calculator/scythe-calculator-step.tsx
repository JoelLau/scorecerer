import { Button, Card, Typography } from '@scorecerer/ui/components';
import { PageLayoutStacked } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ScytheCalculatorStepProps {
  input?: { name: string; type: 'number'; min: 0; max: 6 };
  onChange?: (event: BaseSyntheticEvent) => unknown;
  onNext?: (event: BaseSyntheticEvent) => unknown;
  onPrevious?: (event: BaseSyntheticEvent) => unknown;
}

export function ScytheCalculatorStep(props: ScytheCalculatorStepProps) {
  return (
    <PageLayoutStacked>
      <Typography className="px-6 py-2 text-white">
        <Link to="/">Home</Link> / <Link to="/scythe">Scythe</Link> /{' '}
        <Link to="/scythe/calculator">Calculator</Link>
      </Typography>
      <Typography tag="h1" className="p-6 pt-0 pb-8 text-white">
        Scythe Score Calculator
      </Typography>
      <Card className="flex flex-col items-start mb-10 justify-evenly gap-y-6">
        <img
          src="../assets/images/scythe-board.png"
          alt="Scythe Board"
          className="w-full rounded-lg"
        />
        <input type="number" name="asdf" onChange={props.onChange} />
        <Button
          type="submit-button"
          className="w-full mt-4"
          onClick={props.onNext}
        >
          Next
        </Button>
        <Button className="w-full mt-4" onClick={props.onNext}>
          Previous
        </Button>
      </Card>
    </PageLayoutStacked>
  );
}

export default ScytheCalculatorStep;
