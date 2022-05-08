import { Button, Card, Typography } from '@scorecerer/ui/components';
import { PageLayoutStacked } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ScytheCalculatorPageProps {}

export const ScytheCalculatorPage = (props: ScytheCalculatorPageProps) => {
  const navigate = useNavigate();

  const onClick = (event: BaseSyntheticEvent) => {
    navigate('faction');
  };

  return (
    <PageLayoutStacked>
      <Card className='mb-10'>
        <div className="flex flex-col items-start justify-evenly gap-y-8">
          <div className="flex-1">
            <img
              src="../assets/images/scythe-board.png"
              alt="Scythe Board"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex-1 w-full">
            <Button className="w-full" onClick={onClick}>
              Get Started
            </Button>
          </div>
        </div>
      </Card>
    </PageLayoutStacked>
  );
};

export default ScytheCalculatorPage;
