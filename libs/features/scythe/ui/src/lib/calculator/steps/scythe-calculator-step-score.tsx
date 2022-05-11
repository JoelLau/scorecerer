import { Card, Typography } from '@scorecerer/ui/components';
import { PageLayoutStacked, PageTitle } from '@scorecerer/ui/layout';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScytheCalculatorScorePieces } from '../score-pieces';
import { scytheCalculatorBreadcrumbPieces } from '../scythe-calculator-breadcrumb-pieces.config';
import ScytheCalculatorStepButton from './scythe-calculator-step-button';

export interface ScytheCalculatorStepScoreProps {
  firstStepUrl: string;
  scorePieces: ScytheCalculatorScorePieces;
}

export function ScytheCalculatorStepScore({
  firstStepUrl,
  scorePieces,
}: ScytheCalculatorStepScoreProps) {
  const navigate = useNavigate();
  const onStartOverButtonClick = () => navigate(firstStepUrl);

  const finalScore = useMemo(() => {
    return scorePieces.getFinalScore();
  }, [scorePieces]);

  return (
    <PageLayoutStacked>
      <PageTitle
        breadcrumbPieces={scytheCalculatorBreadcrumbPieces}
        className="align-left"
      >
        Scythe Score Calculator
      </PageTitle>
      <Card>
        <div className="my-4">
          <Typography
            tag="h1"
            variant="h2"
            className="flex flex-col-reverse items-center justify-center text-gray-600 gap-y-1 text-md"
          >
            Final Score
            <span className="mr-3 text-gray-900 text-9xl">{finalScore}</span>
          </Typography>
        </div>
        <ScytheCalculatorStepButton
          variant="reset"
          onClick={onStartOverButtonClick}
        />
      </Card>
    </PageLayoutStacked>
  );
}

export default ScytheCalculatorStepScore;
