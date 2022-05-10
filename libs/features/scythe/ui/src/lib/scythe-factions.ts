export interface ScytheFaction {
  displayName: string;
  name: string;
  id: string;
  color: string;
  emblem: string;
}

export const scytheFactions: ScytheFaction[] = [
  {
    displayName: 'Republic of Polania',
    name: 'Polania',
    id: 'polania-republic',
    color: 'white',
    emblem: 'polania_emblem.png',
  },
  {
    displayName: 'Saxony Empire',
    name: 'Saxony',
    id: 'saxony-empire',
    color: 'black',
    emblem: 'saxony_emblem.png',
  },
  {
    displayName: 'Crimean Khanate',
    name: 'Crimean',
    id: 'crimean-khanate',
    color: 'yellow',
    emblem: 'crimea_emblem.png',
  },
  {
    displayName: 'Nordic Kingdom',
    name: 'Nordic',
    id: 'nordic-kingdom',
    color: 'blue',
    emblem: 'nordic_emblem.png',
  },
  {
    displayName: 'Rusviet Union',
    name: 'Rusviet',
    id: 'rusviet-union',
    color: 'red',
    emblem: 'rusviet_emblem.png',
  },
  {
    displayName: 'Clan Albion',
    name: 'Albion',
    id: 'clan-albion',
    color: 'green',
    emblem: 'albion_emblem.png',
  },
  {
    displayName: 'Togawa Shogunate',
    name: 'Togawa',
    id: 'togawa-shogunate',
    color: 'purple',
    emblem: 'togawa_emblem.png',
  },
];
