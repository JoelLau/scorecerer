import { Navigate, Route, Routes } from 'react-router-dom';
import ScytheCalculatorPage from './scythe-calculator-page';

/* eslint-disable-next-line */
export interface ScytheCalculatorRouterProps {}

export function ScytheCalculatorRouter(props: ScytheCalculatorRouterProps) {
  return (
    <Routes>
      <Route
        index
        element={<ScytheCalculatorPage></ScytheCalculatorPage>}
      ></Route>
      <Route path="*" element={<Navigate to=""></Navigate>}></Route>
    </Routes>
  );
}

export default ScytheCalculatorRouter;
