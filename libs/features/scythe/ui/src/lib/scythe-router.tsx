import { Navigate, Route, Routes } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ScytheRouterProps {}

export function ScytheRouter(props: ScytheRouterProps) {
  return (
    <Routes>
      <Route index element={<Navigate to="test"></Navigate>}></Route>
      <Route path="test/*" element={<h1>Hello World</h1>}></Route>
      <Route path="*" element={<Navigate to="test"></Navigate>}></Route>
    </Routes>
  );
}

export default ScytheRouter;
