import { ScythePage } from '@scorecerer/features/scythe/ui';
import { Navigate, Route, Routes } from 'react-router-dom';

/* eslint-disable-next-line */
export interface AppRouterProps {}

export function AppRouter(props: AppRouterProps) {
  return (
    <Routes>
      <Route index element={<Navigate to="scythe"></Navigate>}></Route>
      <Route path="/scythe/*" element={<ScythePage></ScythePage>}></Route>
      <Route path="*" element={<Navigate to="scythe"></Navigate>}></Route>
    </Routes>
  );
}

export default AppRouter;
