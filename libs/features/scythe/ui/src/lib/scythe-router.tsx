import { Navigate, Route, Routes } from 'react-router-dom';
import { ScytheCalculatorRouter } from './calculator';

/* eslint-disable-next-line */
export interface ScytheRouterProps {}

export const ScytheRouter = (props: ScytheRouterProps) => {
  return (
    <Routes>
      <Route index element={<Navigate to="calculator" />} />
      <Route path="calculator/*" element={<ScytheCalculatorRouter />} />
      <Route path="*" element={<Navigate to="calculator" />} />
    </Routes>
  );
};

export default ScytheRouter;
