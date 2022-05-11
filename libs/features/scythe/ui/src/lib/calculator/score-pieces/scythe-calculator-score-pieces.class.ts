import { getScorePieceWorth } from './popularity-related-score-piece-value.config';

export class ScytheCalculatorScorePieces
  implements ScytheCalculatorScorePiecesI
{
  playerCount?: number;
  faction?: string;
  popularity?: number;
  stars?: number;
  territories?: number;
  resources?: number;
  structureBonus?: number;
  encounterTerritories?: number;
  polaniaSpecial?: string;

  readonly getFinalScore = getFinalScore.bind(null, this);

  constructor({
    playerCount,
    faction,
    popularity,
    stars,
    territories,
    resources,
    structureBonus,
    encounterTerritories,
    polaniaSpecial,
  }: ScytheCalculatorScorePiecesI = {}) {
    this.playerCount = playerCount;
    this.faction = faction;
    this.popularity = popularity;
    this.stars = stars;
    this.territories = territories;
    this.resources = resources;
    this.structureBonus = structureBonus;
    this.encounterTerritories = encounterTerritories;
    this.polaniaSpecial = polaniaSpecial;
  }
}

export interface ScytheCalculatorScorePiecesI {
  playerCount?: number;
  faction?: string;
  popularity?: number;
  stars?: number;
  territories?: number;
  resources?: number;
  structureBonus?: number;
  encounterTerritories?: number;
  polaniaSpecial?: string;
}

export const getFinalScore = ({
  popularity = 0,
  stars = 0,
  territories = 0,
  resources = 0,
  structureBonus = 0,
  encounterTerritories = 0,
  polaniaSpecial,
}: ScytheCalculatorScorePieces): number => {
  const final = Object.entries({
    stars: stars * getScorePieceWorth(popularity, 'starTokens'),
    territories:
      territories * getScorePieceWorth(popularity, 'territoriesControlled'),
    resources:
      Math.floor(resources / 2) *
      getScorePieceWorth(popularity, 'resourcePairs'),
    structureBonus,
    encounterTerritories:
      polaniaSpecial === 'polania-special-true' ? encounterTerritories * 3 : 0,
  }).reduce((prev, [, rawValue]) => {
    return prev + (parseInt(`${rawValue}`, 10) || 0);
  }, 0);

  return final;
};
