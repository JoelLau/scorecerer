import {
  Button,
  Card, FormControlButtonRadioGroup,
  Typography
} from '@scorecerer/ui/components';
import { PageLayoutStacked, PageTitle } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ScytheCalculatorStepProps { }

export function ScytheCalculatorStep(props: ScytheCalculatorStepProps) {
  const navigate = useNavigate();

  const onSubmit = (event: BaseSyntheticEvent) => {
    navigate('../stars');
  };

  const breadCrumbPieces = [{
    children: 'Home',
    to: '/'
  },
  {
    children: 'Scythe',
    to: '/scythe'
  },
  {
    children: 'Calculator',
    to: '../calculator'
  }];

  const radioGroupOptions = [{
    id: "polania-republic",
    value: "polania-republic",
    name: "faction",
    className: "w-full",
    children: [<img
      src="../assets/images/polania_emblem.png"
      alt="Polania Republic"
      className="w-8 h-8 rounded-lg"
    />,
    <Typography>Polania Republic</Typography>]
  },
  {
    id: "saxony-empire",
    value: "saxony-empire",
    name: "faction",
    className: "w-full",
    children: [<img
      src="../assets/images/saxony_emblem.png"
      alt="Saxony Empire"
      className="w-8 h-8 rounded-lg"
    />,
    <Typography>Saxony Empire</Typography>]
  }];

  return (
    <PageLayoutStacked>
      <PageTitle breadcrumbPieces={breadCrumbPieces}>
        Scythe Score Calculator
      </PageTitle>
      <Card>
        <form
          className="flex flex-col items-start w-full pt-3 justify-evenly gap-y-10"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col w-full gap-y-1">
            <FormControlButtonRadioGroup options={radioGroupOptions} />
          </div>
          <div className="flex flex-col w-full gap-y-2">
            <Button type="submit-button" variant='cta' className="flex w-full flex-start">
              <Typography variant='button'>Next</Typography>
            </Button>
            <Button type="submit-button" className="flex w-full flex-start">
              <Typography variant='button'>Previous</Typography>
            </Button>
          </div>
        </form>
      </Card>
    </PageLayoutStacked>
  );
}

export default ScytheCalculatorStep;
