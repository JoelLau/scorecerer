import { Button, Card, Typography } from '@scorecerer/ui/components';
import { PageLayoutStacked } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ScytheCalculatorHomePageProps {}

export const ScytheCalculatorHomePage = (props: ScytheCalculatorHomePageProps) => {
  const navigate = useNavigate();

  const onClick = (event: BaseSyntheticEvent) => {
    navigate('faction');
  };

  return (
    <PageLayoutStacked>
      <Typography className="px-6 py-2 text-white">
        <Link to="/">Home</Link> / <Link to="/scythe">Scythe</Link> / {' '}
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
        <Button className="w-full mt-4" onClick={onClick}>
          Get Started
        </Button>
      </Card>
    </PageLayoutStacked>
  );
};

export default ScytheCalculatorHomePage;
