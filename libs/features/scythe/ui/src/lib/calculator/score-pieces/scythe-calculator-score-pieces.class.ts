import { getScorePieceWorth } from './popularity-related-score-piece-value.config';

export class ScytheCalculatorScorePieces
  implements ScytheCalculatorScorePiecesI
{
  playerCount: number | '';
  faction: string | '';
  popularity: number | '';
  stars: number | '';
  territories: number | '';
  resources: number | '';
  structureBonus: number | '';
  encounterTerritories: number | '';
  polaniaSpecial: string | '';
  coins: number | '';

  readonly getFinalScore = getFinalScore.bind('', this);

  constructor(
    {
      playerCount,
      faction,
      popularity,
      stars,
      territories,
      resources,
      structureBonus,
      encounterTerritories,
      polaniaSpecial,
      coins,
    }: ScytheCalculatorScorePiecesI = {
      playerCount: '',
      faction: '',
      popularity: '',
      stars: '',
      territories: '',
      resources: '',
      structureBonus: '',
      encounterTerritories: '',
      polaniaSpecial: '',
      coins: '',
    }
  ) {
    this.playerCount = playerCount;
    this.faction = faction;
    this.popularity = popularity;
    this.stars = stars;
    this.territories = territories;
    this.resources = resources;
    this.structureBonus = structureBonus;
    this.encounterTerritories = encounterTerritories;
    this.polaniaSpecial = polaniaSpecial;
    this.coins = coins;
  }
}

export interface ScytheCalculatorScorePiecesI {
  playerCount: number | '';
  faction: string | '';
  popularity: number | '';
  stars: number | '';
  territories: number | '';
  resources: number | '';
  structureBonus: number | '';
  encounterTerritories: number | '';
  polaniaSpecial: string | '';
  coins: number | '';
}

export const getFinalScore = ({
  popularity = 0,
  stars = 0,
  territories = 0,
  resources = 0,
  structureBonus = 0,
  encounterTerritories = 0,
  polaniaSpecial,
  coins = 0,
}: ScytheCalculatorScorePieces): number => {
  const final = Object.entries({
    stars: (stars || 0) * getScorePieceWorth(popularity || 0, 'starTokens'),
    territories:
      (territories || 0) *
      getScorePieceWorth(popularity || 0, 'territoriesControlled'),
    resources:
      Math.floor((resources || 0) / 2) *
      getScorePieceWorth(popularity || 0, 'resourcePairs'),
    structureBonus,
    encounterTerritories:
      polaniaSpecial === 'polania-special-true'
        ? (encounterTerritories || 0) * 3
        : 0,
    coins,
  }).reduce((prev, [, rawValue]) => {
    return prev + (parseInt(`${rawValue}`, 10) || 0);
  }, 0);

  return final;
};
