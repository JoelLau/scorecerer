import {
  Button,
  Card,
  FormControl,
  Typography,
} from '@scorecerer/ui/components';
import { PageLayoutStacked } from '@scorecerer/ui/layout';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ScytheCalculatorHomePage from './scythe-calculator-home-page';
import ScytheCalculatorStep from './scythe-calculator-step';

/* eslint-disable-next-line */
export interface ScytheCalculatorRouterProps {}

export const ScytheCalculatorRouter = (props: ScytheCalculatorRouterProps) => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route index element={<ScytheCalculatorHomePage />} />
      <Route path="faction" element={<ScytheCalculatorStep />} />
      <Route
        path="popularity"
        element={
          <PageLayoutStacked>
            <form className="flex flex-col items-start w-full justify-evenly gap-y-8">
              <div className="flex-1">
                <img
                  src="../assets/images/scythe-board.png"
                  alt="Scythe Board"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex flex-col items-start flex-1 w-full pl-1 gap-y-2">
                <div className="flex flex-row items-center justify-start w-full cursor-pointer gap-x-2">
                  <FormControl
                    type="text"
                    name="popularity"
                    id="popularity"
                    min={0}
                    max={18}
                    placeholder="Popularity (0 - 18)"
                    autoFocus
                  />
                </div>
              </div>
              <div className="flex flex-col w-full text-center gap-y-2">
                <Button onClick={() => navigate('stars')}>Next</Button>
                <Button onClick={() => navigate('faction')}>Previous</Button>
              </div>
            </form>
          </PageLayoutStacked>
        }
      />
      <Route
        path="stars"
        element={
          <PageLayoutStacked>
            <div className="max-w-sm pt-16">
              <form className="flex flex-col items-start w-full justify-evenly gap-y-8">
                <div className="flex-1">
                  <img
                    src="../assets/images/scythe-board.png"
                    alt="Scythe Board"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-start flex-1 w-full pl-1 gap-y-2">
                  <div className="flex flex-row items-center justify-start w-full cursor-pointer gap-x-2">
                    <input
                      type="number"
                      name="Stars"
                      id="Stars"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      min={0}
                      max={6}
                      placeholder="Stars (0 - 6)"
                      autoFocus
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full text-center gap-y-2">
                  <Button onClick={() => navigate('../')}>Complete</Button>
                  <Button onClick={() => navigate('popularity')}>
                    Previous
                  </Button>
                </div>
              </form>
            </div>
          </PageLayoutStacked>
        }
      />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};

export default ScytheCalculatorRouter;
