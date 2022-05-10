import {
  FormControlButtonRadioProps,
  Typography,
} from '@scorecerer/ui/components';
import { scytheFactions } from '../scythe-factions';

export const scytheCalculatorFactionOptions: FormControlButtonRadioProps[] = [
  ...scytheFactions.map(({ displayName, id, emblem }) => ({
    id,
    value: id,
    name: 'faction',
    className: 'w-full',
    children: [
      <img
        src={`../assets/images/${emblem}`}
        alt={`Emblem of ${displayName}`}
        className="w-8 h-8 rounded-lg"
      />,
      <Typography>{displayName}</Typography>,
    ],
  })),
];
