import { Typography } from '@scorecerer/ui/components';
import { ScytheCalculatorScorePiecesI } from '../score-pieces';
import { scytheCalculatorFactionOptions } from '../scythe-calculator-faction-options.config';
import { ScytheCalculatorStepProps } from './scythe-calculator-step';

export interface ScytheCalculatorStepItem extends ScytheCalculatorStepProps {
  id: string;
}

export const scytheCalculatorSteps: ScytheCalculatorStepItem[] = [
  {
    id: 'player-count',
    children: [
      <Typography variant="h1">How many people are playing?</Typography>,
    ],
    formControl: {
      variant: 'number',
      id: 'player-count',
      name: 'player-count',
      max: 7,
      min: 1,
      autoFocus: true,
      placeholder: 'Player Count (1 - 7)',
    },
    validator: (value: string): string[] => {
      const num = parseInt(value, 10);
      if (isNaN(num) || num > 7 || num < 1) {
        return [`Player Count must be a number less than 7 and more than 1`];
      }
      return [];
    },
  },
  {
    id: 'faction',
    children: [
      <Typography variant="h1">Which faction did you pick?</Typography>,
    ],
    formControl: {
      variant: 'button-radio-group',
      name: 'faction',
      options: scytheCalculatorFactionOptions,
    },
    validator: (value: string | number): string[] => [],
  },
  {
    id: 'popularity',
    children: [<Typography variant="h1">How popular were you?</Typography>],
    formControl: {
      variant: 'number',
      id: 'popularity',
      name: 'popularity',
      max: 18,
      min: 0,
      autoFocus: true,
      placeholder: 'Popularity (0 - 18)',
    },
    validator: (value: string): string[] => [],
  },
  {
    id: 'stars',
    children: [
      <Typography variant="h1">How many star tokens did you place?</Typography>,
    ],
    formControl: {
      variant: 'number',
      id: 'stars',
      name: 'stars',
      max: 6,
      min: 0,
      autoFocus: true,
      placeholder: 'Stars (0 - 6)',
    },
    validator: (value: string): string[] => [],
  },
  {
    id: 'territories',
    children: [
      <Typography variant="h1">
        How many territories do you control?
      </Typography>,
    ],
    formControl: {
      variant: 'number',
      id: 'territories',
      name: 'territories',
      min: 0,
      autoFocus: true,
      placeholder: 'Territories Controlled',
    },
    validator: (value: string): string[] => [],
  },
  {
    id: 'resources',
    children: [
      <Typography variant="h1">How many resources do you control?</Typography>,
    ],
    formControl: {
      variant: 'number',
      id: 'resources',
      name: 'resources',
      min: 0,
      autoFocus: true,
      placeholder: 'Resources Controlled',
    },
    validator: (value: string): string[] => [],
  },
  {
    id: 'structure-bonus',
    children: [
      <Typography variant="h1">
        How structure bonus points were you awarded?
      </Typography>,
    ],
    formControl: {
      variant: 'number',
      id: 'structure-bonus',
      name: 'structure-bonus',
      min: 0,
      autoFocus: true,
      placeholder: 'Structure Bonus',
    },
    validator: (value: string): string[] => [],
  },
  {
    id: 'encounter-territories',
    children: [
      <Typography variant="h1">
        How many encounter territories do you control?
      </Typography>,
    ],
    formControl: {
      variant: 'number',
      id: 'encounter-territories',
      name: 'encounter-territories',
      min: 0,
      autoFocus: true,
      placeholder: 'Encounter Territories Controlled',
    },
    validator: (value: string): string[] => [],
  },
];

export const stepIdtoScorePiecesKeyMap: {
  [key: string]: keyof ScytheCalculatorScorePiecesI;
} = {
  'player-count': 'playerCount',
  faction: 'faction',
  popularity: 'popularity',
  stars: 'stars',
  territories: 'territories',
  resources: 'resources',
  'structure-bonus': 'structureBonus',
  'encounter-territories': 'encounterTerritories',
};
