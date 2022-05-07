import { ScytheRouter } from '@scorecerer/features/scythe/ui';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="scythe" />} />
      <Route path="/scythe/*" element={<ScytheRouter />} />
      <Route path="*" element={<Navigate to="scythe" />} />
    </Routes>
  );
};

export default App;
