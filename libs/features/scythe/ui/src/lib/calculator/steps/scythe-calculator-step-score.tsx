import { EditIcon } from '@scorecerer/ui/assets';
import { Button, Card, Typography } from '@scorecerer/ui/components';
import { PageLayoutStacked, PageTitle } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScytheCalculatorScorePieces } from '../score-pieces';
import { getScorePieceWorth } from '../score-pieces/popularity-related-score-piece-value.config';
import { scytheCalculatorBreadcrumbPieces } from '../scythe-calculator-breadcrumb-pieces.config';
import ScytheCalculatorStepButton from './scythe-calculator-step-button';
import { ScytheCalculatorStepItem } from './scythe-calculator-steps.config';

export interface ScytheCalculatorStepScoreProps {
  scorePieces: ScytheCalculatorScorePieces;
  onLoad?: () => unknown;
  onReset?: (event: BaseSyntheticEvent) => unknown;
  steps?: ScytheCalculatorStepItem[];
}

export function ScytheCalculatorStepScore({
  scorePieces,
  onLoad,
  onReset,
  steps,
}: ScytheCalculatorStepScoreProps) {
  const navigate = useNavigate();

  const onStartOverButtonClick = (event: BaseSyntheticEvent) => {
    onReset && onReset(event);
  };

  const onEditClick = (event: BaseSyntheticEvent) => {
    if (steps && steps[0] && steps[0].id) {
      navigate(`../${steps[0].id}`);
    }
  };

  const finalScore = scorePieces.getFinalScore();

  useEffect(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

  return (
    <PageLayoutStacked>
      <PageTitle
        breadcrumbPieces={scytheCalculatorBreadcrumbPieces}
        className="align-left"
      >
        Scythe Score Calculator
      </PageTitle>
      <Card className="mb-16">
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
        <table className="w-full text-gray-600">
          <thead className="hidden">
            <tr>
              <td>Category</td>
              <td>Quanity</td>
            </tr>
          </thead>
          <tbody>
            <tr
              className="w-full rounded-lg cursor-pointer"
              onClick={() => {
                navigate('../popularity');
              }}
            >
              <td className="py-3 pl-8 text-left">Popularity</td>
              <td className="pr-8 text-right">0 pts</td>
            </tr>
            <tr className="w-full rounded-lg">
              <td className="py-3 pl-8 text-left">Stars</td>
              <td className="pr-8 text-right">
                {(scorePieces.stars || 0) *
                  getScorePieceWorth(
                    scorePieces.popularity || 0,
                    'starTokens'
                  ) || 0}{' '}
                pts
              </td>
            </tr>
            <tr
              className="w-full rounded-lg cursor-pointer"
              onClick={() => {
                navigate('../territories');
              }}
            >
              <td className="py-3 pl-8 text-left">Territories</td>
              <td className="pr-8 text-right">
                {(scorePieces.territories || 0) *
                  getScorePieceWorth(
                    scorePieces.popularity || 0,
                    'territoriesControlled'
                  ) || 0}{' '}
                pts
              </td>
            </tr>
            <tr
              className="w-full rounded-lg cursor-pointer"
              onClick={() => {
                navigate('../resources');
              }}
            >
              <td className="py-3 pl-8 text-left">Resources</td>
              <td className="pr-8 text-right">
                {Math.floor((scorePieces.resources || 0) / 2) *
                  getScorePieceWorth(
                    scorePieces.popularity || 0,
                    'resourcePairs'
                  ) || 0}{' '}
                pts
              </td>
            </tr>
            <tr
              className="w-full rounded-lg cursor-pointer"
              onClick={() => {
                navigate('../structure-bonus');
              }}
            >
              <td className="py-3 pl-8 text-left">Structure Bonus Pts</td>
              <td className="pr-8 text-right">
                {scorePieces.structureBonus || 0} pts
              </td>
            </tr>
            {scorePieces.encounterTerritories &&
              scorePieces.polaniaSpecial === 'polania-special-true' && (
                <tr className="w-full rounded-lg">
                  <td className="py-3 pl-8 text-left">Encounter Territories</td>
                  <td className="pr-8 text-right">
                    {scorePieces.encounterTerritories || 0} pts
                  </td>
                </tr>
              )}
            <tr
              className="w-full rounded-lg cursor-pointer"
              onClick={() => {
                navigate('../coins');
              }}
            >
              <td className="py-3 pl-8 text-left">Coins</td>
              <td className="pr-8 text-right">{scorePieces.coins || 0} pts</td>
            </tr>
          </tbody>
        </table>
        <ScytheCalculatorStepButton
          variant="reset"
          onClick={onStartOverButtonClick}
        />
      </Card>
    </PageLayoutStacked>
  );
}

export default ScytheCalculatorStepScore;
