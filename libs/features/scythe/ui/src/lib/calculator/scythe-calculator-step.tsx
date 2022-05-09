import {
  Button,
  Card,
  FormControlButtonRadio,
  Typography,
} from '@scorecerer/ui/components';
import { PageLayoutStacked } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ScytheCalculatorStepProps {}

export function ScytheCalculatorStep(props: ScytheCalculatorStepProps) {
  const navigate = useNavigate();

  const onSubmit = (event: BaseSyntheticEvent) => {
    navigate('../stars');
  };

  return (
    <PageLayoutStacked>
      <Typography className="px-6 py-2 text-white">
        <Link to="/">Home</Link> / <Link to="/scythe">Scythe</Link> /{' '}
        <Link to="/scythe/calculator">Calculator</Link>
      </Typography>
      <Typography tag="h1" className="p-6 pt-0 pb-8 text-white">
        Scythe Score Calculator
      </Typography>
      <Card>
        <form
          className="flex flex-col items-start w-full justify-evenly gap-y-5"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col w-full gap-y-1">
            <FormControlButtonRadio
              id="polania-republic"
              value="polania-republic"
              name="faction"
              className="w-full"
            >
              <img
                src="../assets/images/polania_emblem.png"
                alt="Polania Republic"
                className="w-8 h-8 rounded-lg"
              />
              <Typography>Polania Republic</Typography>
            </FormControlButtonRadio>
            <FormControlButtonRadio
              type="radio"
              name="faction"
              id="saxony-empire"
              value="Saxony Empire"
              className="w-full"
              checked={false}
            >
              <img
                src="../assets/images/saxony_emblem.png"
                alt="Saxony Empire"
                className="w-8 h-8 rounded-lg"
              />
              <Typography>Saxony Empire</Typography>
            </FormControlButtonRadio>
          </div>
          <Button type="submit-button" className="flex w-full flex-start">
            <Typography>Next</Typography>
            <kbd className="px-2.5 py-1 bg-gray-200 rounded-lg mx-2">Enter</kbd>
          </Button>
        </form>
      </Card>
    </PageLayoutStacked>
  );
}

export default ScytheCalculatorStep;
