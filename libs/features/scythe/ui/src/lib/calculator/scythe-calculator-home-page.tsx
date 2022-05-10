import { Button, Card } from '@scorecerer/ui/components';
import { PageLayoutStacked, PageTitle } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { scytheCalculatorBreadcrumbPieces } from './scythe-calculator-breadcrumb-pieces';

/* eslint-disable-next-line */
export interface ScytheCalculatorHomePageProps { }

export const ScytheCalculatorHomePage = (
  props: ScytheCalculatorHomePageProps
) => {
  const navigate = useNavigate();

  const onClick = (event: BaseSyntheticEvent) => {
    navigate('faction');
  };

  return (
    <PageLayoutStacked>
      <PageTitle breadcrumbPieces={scytheCalculatorBreadcrumbPieces}>
        Scythe Score Calculator
      </PageTitle>
      <Card className="flex flex-col items-start mb-10 justify-evenly gap-y-6">
        <img
          src="../assets/images/scythe-board.png"
          alt="Scythe Board"
          className="w-full rounded-lg"
        />
        <Button variant='cta' className="w-full mt-4" onClick={onClick} autoFocus>
          Get Started
        </Button>
      </Card>
    </PageLayoutStacked>
  );
};

export default ScytheCalculatorHomePage;
