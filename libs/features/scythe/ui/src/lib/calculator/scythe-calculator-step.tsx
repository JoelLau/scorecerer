import { Button, Card, Typography } from '@scorecerer/ui/components';
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
        <img
          src="../assets/images/scythe-board.png"
          alt="Scythe Board"
          className="w-full rounded-lg"
        />
        <form
          className="flex flex-col items-start w-full justify-evenly gap-y-2"
          onSubmit={onSubmit}
        >
          <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
            <label htmlFor="polania-republic" tabIndex={1}>
              Polania Republic
            </label>
            <input
              type="radio"
              name="faction"
              id="polania-republic"
              value="Polania Republic"
              autoFocus
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
            <label htmlFor="saxony-empire" tabIndex={2}>
              Saxony Empire
            </label>
            <input
              type="radio"
              name="faction"
              id="saxony-empire"
              value="Saxony Empire"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
            <label htmlFor="crimean-khanate" tabIndex={3}>
              Crimean Khanate
            </label>
            <input
              type="radio"
              name="faction"
              id="crimean-khanate"
              value="Crimean Khanate"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
            <label htmlFor="nordic-kingdom" tabIndex={4}>
              Nordic Kingdom
            </label>
            <input
              type="radio"
              name="faction"
              id="nordic-kingdom"
              value="Nordic Kingdom"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
            <label htmlFor="rusviet-union" tabIndex={5}>
              Rusviet Union
            </label>
            <input
              type="radio"
              name="faction"
              id="rusviet-union"
              value="Rusviet Union"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
            <label htmlFor="clan-albion" tabIndex={6}>
              Clan Albion
            </label>
            <input
              type="radio"
              name="faction"
              id="clan-albion"
              value="Clan Albion"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
            <label htmlFor="togawa-shogunate" tabIndex={7}>
              Togawa Shogunate
            </label>
            <input
              type="radio"
              name="faction"
              id="togawa-shogunate"
              value="Togawa Shogunate"
            />
          </div>
          <Button type="submit-button" className="w-full mt-4">
            Next
          </Button>
        </form>
      </Card>
    </PageLayoutStacked>
  );
}

export default ScytheCalculatorStep;
