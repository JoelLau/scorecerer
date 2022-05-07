import { Button, Typography } from '@scorecerer/ui/components';
import { PageContent, StackedLayout } from '@scorecerer/ui/layout';
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
    <StackedLayout>
      <PageContent className="max-w-sm pt-16">
        <div className="flex flex-col items-start justify-evenly gap-y-8">
          <div className="flex-1">
            <img
              src="../assets/images/scythe-board.png"
              alt="Scythe Board"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col items-start flex-1 pl-1 gap-y-2">
            <Typography variant="h1">Scythe Calculator</Typography>
            <Button onClick={onClick} autoFocus>
              Get Started
            </Button>
          </div>
        </div>
      </PageContent>
    </StackedLayout>
  );
};

export default ScytheCalculatorPage;
