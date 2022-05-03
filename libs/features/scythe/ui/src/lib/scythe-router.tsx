import { Navigate, Route, Routes } from 'react-router-dom';
import { ScytheCalculatorRouter } from './calculator';

/* eslint-disable-next-line */
export interface ScytheRouterProps {}

export function ScytheRouter(props: ScytheRouterProps) {
  return (
    <Routes>
      <Route index element={<Navigate to="calculator"></Navigate>}></Route>
      <Route
        path="calculator/*"
        element={<ScytheCalculatorRouter></ScytheCalculatorRouter>}
      ></Route>
      <Route path="*" element={<Navigate to="calculator"></Navigate>}></Route>
    </Routes>
  );
}

export default ScytheRouter;
