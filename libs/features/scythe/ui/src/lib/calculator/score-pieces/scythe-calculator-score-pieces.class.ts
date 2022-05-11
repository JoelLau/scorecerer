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

  readonly getFinalScore = getFinalScore.bind(this, this);

  constructor({
    playerCount,
    faction,
    popularity,
    stars,
    territories,
    resources,
    structureBonus,
    encounterTerritories,
  }: ScytheCalculatorScorePiecesI = {}) {
    this.playerCount = playerCount;
    this.faction = faction;
    this.popularity = popularity;
    this.stars = stars;
    this.territories = territories;
    this.resources = resources;
    this.structureBonus = structureBonus;
    this.encounterTerritories = encounterTerritories;
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
}

export const getFinalScore = ({
  popularity = 0,
  stars = 0,
  territories = 0,
  resources = 0,
  structureBonus = 0,
  encounterTerritories = 0,
}: ScytheCalculatorScorePieces): number => {
  return Object.entries({
    playerCount: 0,
    faction: 0,
    popularity: 0,
    stars: stars * getScorePieceWorth(popularity, 'starTokens'),
    territories:
      territories * getScorePieceWorth(popularity, 'territoriesControlled'),
    resources:
      Math.floor(resources / 2) *
      getScorePieceWorth(popularity, 'resourcePairs'),
    structureBonus: structureBonus,
    encounterTerritories: encounterTerritories,
  }).reduce((prev, [key, value]) => prev + parseInt(`${value}`, 10), 0);
};
