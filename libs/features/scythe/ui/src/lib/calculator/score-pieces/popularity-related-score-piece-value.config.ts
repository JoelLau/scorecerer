export interface ScorePieceWorth {
  starTokens: number;
  territoriesControlled: number;
  resourcePairs: number;
}

export const popularityRelatedScorePieces: ScorePieceWorth[] = [
  { starTokens: 3, territoriesControlled: 2, resourcePairs: 1 },
  { starTokens: 4, territoriesControlled: 3, resourcePairs: 2 },
  { starTokens: 5, territoriesControlled: 4, resourcePairs: 3 },
];

export const getPopularityTier = (popularity: number): 1 | 2 | 3 => {
  if (popularity <= 6) {
    return 1;
  }

  if (popularity > 6 && popularity < 13) {
    return 2;
  }

  return 3;
};

export const getPopularityTierData = (popularity: number): ScorePieceWorth => {
  const tier = getPopularityTier(popularity);
  return popularityRelatedScorePieces[tier];
};

export const getScorePieceWorth = (
  popularity: number,
  scorePiece: keyof ScorePieceWorth
): number => {
  const tierData = getPopularityTierData(popularity);
  return tierData[scorePiece];
};
