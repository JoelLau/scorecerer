import React from 'react';
import AppRouter from './app-router';

export type ScoreComponents = {
  popularity: number;
  stars: number;
  resources: number;
  territories: number;
  structureBonus: number;
  money: number;
};

export const App = () => {
  return <AppRouter />;
};

export default App;
