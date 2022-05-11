import { EditIcon } from '@scorecerer/ui/assets';
import { Button, Card, Typography } from '@scorecerer/ui/components';
import { PageLayoutStacked, PageTitle } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScytheCalculatorScorePieces } from '../score-pieces';
import { scytheCalculatorBreadcrumbPieces } from '../scythe-calculator-breadcrumb-pieces.config';
import ScytheCalculatorStepButton from './scythe-calculator-step-button';
import { ScytheCalculatorStepItem } from './scythe-calculator-steps.config';

export interface ScytheCalculatorStepScoreProps {
  scorePieces: ScytheCalculatorScorePieces;
  onReset?: (event: BaseSyntheticEvent) => unknown;
  steps?: ScytheCalculatorStepItem[];
}

export function ScytheCalculatorStepScore({
  scorePieces,
  onReset,
  steps,
}: ScytheCalculatorStepScoreProps) {
  const navigate = useNavigate();

  const onStartOverButtonClick = (event: BaseSyntheticEvent) => {
    onReset && onReset(event);
  };

  const onEditClick = (event: BaseSyntheticEvent) => {
    if (steps && steps[0] && steps[0].id) {
      navigate(steps[0].id);
    }
  };

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
          <Button
            variant="clickable-text"
            title="Edit"
            className="absolute top-3 right-3"
            onClick={onEditClick}
          >
            <EditIcon className="w-4 h-4 fill-gray-200 hover:fill-gray-500" />
          </Button>
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
