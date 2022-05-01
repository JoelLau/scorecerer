import { ScythePage } from '@scorecerer/features/scythe/ui';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export type ScoreComponents = {
  popularity: number;
  stars: number;
  resources: number;
  territories: number;
  structureBonus: number;
  money: number;
};

export const App = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="scythe"></Navigate>}></Route>
      <Route path="/scythe/*" element={<ScythePage></ScythePage>}></Route>
      <Route path="*" element={<Navigate to="scythe"></Navigate>}></Route>
    </Routes>
  );
};

export default App;
