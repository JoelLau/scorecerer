import { Navigate, Route, Routes } from 'react-router-dom';
import ScytheTest from './scythe-test';

/* eslint-disable-next-line */
export interface ScytheRouterProps {}

export function ScytheRouter(props: ScytheRouterProps) {
  return (
    <Routes>
      <Route index element={<Navigate to="test"></Navigate>}></Route>
      <Route path="test/*" element={<ScytheTest></ScytheTest>}></Route>
      <Route path="*" element={<Navigate to="test"></Navigate>}></Route>
    </Routes>
  );
}

export default ScytheRouter;
