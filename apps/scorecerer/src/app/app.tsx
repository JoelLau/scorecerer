import { ScytheRouter } from '@scorecerer/features/scythe/ui';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="scythe"></Navigate>}></Route>
      <Route path="/scythe/*" element={<ScytheRouter></ScytheRouter>}></Route>
      <Route path="*" element={<Navigate to="scythe"></Navigate>}></Route>
    </Routes>
  );
};

export default App;
