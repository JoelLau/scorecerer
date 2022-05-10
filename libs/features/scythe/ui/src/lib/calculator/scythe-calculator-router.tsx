import { Button, FormControl } from '@scorecerer/ui/components';
import { PageLayoutStacked } from '@scorecerer/ui/layout';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ScytheCalculatorHomePage from './scythe-calculator-home-page';
import ScytheCalculatorStep from './scythe-calculator-step';

/* eslint-disable-next-line */
export interface ScytheCalculatorRouterProps {}

export const ScytheCalculatorRouter = (props: ScytheCalculatorRouterProps) => {
  return (
    <Routes>
      <Route index element={<ScytheCalculatorHomePage />} />
      <Route path="faction" element={<ScytheCalculatorStep />} />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};

export default ScytheCalculatorRouter;
