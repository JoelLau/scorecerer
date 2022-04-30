import React, { BaseSyntheticEvent, useState } from 'react';

export type ScoreComponents = {
  popularity: number;
  stars: number;
  resources: number;
  territories: number;
  structureBonus: number;
  money: number;
};

export const App = () => {
  const onFormSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
  };

  const getScoreChangeHandler = (key: keyof ScoreComponents) => {
    return ({ target }: BaseSyntheticEvent) => {
      const newScore = JSON.parse(JSON.stringify(score));
      newScore[key] = parseInt(target.value, 10);
      setScore(newScore);
    };
  };

  const [score, setScore] = useState({
    popularity: 0,
    stars: 0,
    resources: 0,
    territories: 0,
    structureBonus: 0,
    money: 0,
  });

  const calculateScore = ({
    popularity,
    stars,
    resources,
    territories,
    structureBonus,
    money,
  }: ScoreComponents) => {
    const popularityTier = getPopularityTier(popularity);
    const componentsWorth: {
      stars: number;
      territories: number;
      resources: number;
    }[] = [
      {
        stars: 3,
        territories: 2,
        resources: 1,
      },
      {
        stars: 4,
        territories: 3,
        resources: 2,
      },
      {
        stars: 5,
        territories: 4,
        resources: 3,
      },
    ];

    const worth = componentsWorth[popularityTier];
    if (!worth) {
      return -1;
    }

    return {
      popularity: 0,
      stars: stars * worth.stars,
      resources: Math.floor(resources / 2) * worth.resources,
      territories: territories * worth.resources,
      structureBonus,
      money,
    };
  };

  const getPopularityTier = (popularity: number): number => {
    if (popularity >= 13) {
      return 2;
    }

    if (popularity >= 7 && popularity <= 12) {
      return 1;
    }

    return 0;
  };

  return (
    <>
      <form id="form" onSubmit={onFormSubmit}>
        <div className="popularity">
          <label htmlFor="popularity">Popularity</label>
          <input
            type="number"
            name="popularity"
            id="popularity"
            placeholder="Popularity"
            min="0"
            max="18"
            value={score.popularity}
            onChange={getScoreChangeHandler('popularity')}
          />
        </div>
        <div className="stars">
          <label htmlFor="stars">Star Tokens Placed</label>
          <input
            type="number"
            name="stars"
            id="stars"
            placeholder="Star Tokens Placed"
            value={score.stars}
            onChange={getScoreChangeHandler('stars')}
            min="0"
            max="6"
          />
        </div>
        <div className="territories">
          <label htmlFor="territories">Territories Controlled</label>
          <input
            type="number"
            name="territories"
            id="star-tokens"
            placeholder="Territories Controlled"
            min="0"
            value={score.territories}
            onChange={getScoreChangeHandler('territories')}
          />
        </div>
        <div className="resources">
          <label htmlFor="resources">Resources Controlled</label>
          <input
            type="number"
            name="resources"
            id="resources"
            placeholder="Resources Controlled"
            min="0"
            max="6"
            value={score.resources}
            onChange={getScoreChangeHandler('resources')}
          />
        </div>
        <div className="structure-bonus">
          <label htmlFor="structure-bonus">Structure Bonus</label>
          <input
            type="number"
            name="structure-bonus"
            id="structure-bonus"
            placeholder="Structure Bonus"
            min="0"
            max="9"
            value={score.structureBonus}
            onChange={getScoreChangeHandler('structureBonus')}
          />
        </div>
        <div className="complete">
          <button type="submit">Calculate</button>
        </div>
      </form>
      <div className="results">
        <h1>
          Final Score:
          {Object.values(calculateScore(score)).reduce(
            (prev, curr) => prev + curr,
            0
          )}
        </h1>
        <pre>Breakdown: {JSON.stringify(calculateScore(score), null, 2)}</pre>
      </div>
    </>
  );
};

export default App;
