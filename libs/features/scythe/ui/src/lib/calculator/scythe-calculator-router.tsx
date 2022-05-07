import { Button } from '@scorecerer/ui/components';
import { PageContent, StackedLayout } from '@scorecerer/ui/layout';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import ScytheCalculatorPage from './scythe-calculator-page';

/* eslint-disable-next-line */
export interface ScytheCalculatorRouterProps {}

export function ScytheCalculatorRouter(props: ScytheCalculatorRouterProps) {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route index element={<ScytheCalculatorPage />} />
      <Route
        path="faction"
        element={
          <StackedLayout>
            <PageContent className="max-w-sm pt-16">
              <form className="flex flex-col items-start w-full justify-evenly gap-y-8">
                <div className="flex-1">
                  <img
                    src="../assets/images/scythe-board.png"
                    alt="Scythe Board"
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-start flex-1 w-full pl-1 gap-y-2">
                  <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
                    <label htmlFor="polania-republic" tabIndex={1}>
                      Polania Republic
                    </label>
                    <input
                      type="radio"
                      name="faction"
                      id="polania-republic"
                      value="Polania Republic"
                      autoFocus
                    />
                  </div>
                  <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
                    <label htmlFor="saxony-empire" tabIndex={2}>
                      Saxony Empire
                    </label>
                    <input
                      type="radio"
                      name="faction"
                      id="saxony-empire"
                      value="Saxony Empire"
                    />
                  </div>
                  <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
                    <label htmlFor="crimean-khanate" tabIndex={3}>
                      Crimean Khanate
                    </label>
                    <input
                      type="radio"
                      name="faction"
                      id="crimean-khanate"
                      value="Crimean Khanate"
                    />
                  </div>
                  <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
                    <label htmlFor="nordic-kingdom" tabIndex={4}>
                      Nordic Kingdom
                    </label>
                    <input
                      type="radio"
                      name="faction"
                      id="nordic-kingdom"
                      value="Nordic Kingdom"
                    />
                  </div>
                  <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
                    <label htmlFor="rusviet-union" tabIndex={5}>
                      Rusviet Union
                    </label>
                    <input
                      type="radio"
                      name="faction"
                      id="rusviet-union"
                      value="Rusviet Union"
                    />
                  </div>
                  <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
                    <label htmlFor="clan-albion" tabIndex={6}>
                      Clan Albion
                    </label>
                    <input
                      type="radio"
                      name="faction"
                      id="clan-albion"
                      value="Clan Albion"
                    />
                  </div>
                  <div className="flex flex-row-reverse items-center justify-start cursor-pointer gap-x-2">
                    <label htmlFor="togawa-shogunate" tabIndex={7}>
                      Togawa Shogunate
                    </label>
                    <input
                      type="radio"
                      name="faction"
                      id="togawa-shogunate"
                      value="Togawa Shogunate"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full text-center gap-y-2">
                  <Button width="full" onClick={() => navigate('popularity')}>
                    Next
                  </Button>
                  <Button width="full">Previous</Button>
                </div>
              </form>
            </PageContent>
          </StackedLayout>
        }
      />
      <Route
        path="popularity"
        element={
          <StackedLayout>
            <PageContent className="max-w-sm pt-16">
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
                      name="popularity"
                      id="popularity"
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      min={0}
                      max={18}
                      placeholder="Popularity (0 - 18)"
                      autoFocus
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full text-center gap-y-2">
                  <Button width="full" onClick={() => navigate('stars')}>
                    Next
                  </Button>
                  <Button width="full" onClick={() => navigate('faction')}>
                    Previous
                  </Button>
                </div>
              </form>
            </PageContent>
          </StackedLayout>
        }
      />
      <Route
        path="stars"
        element={
          <StackedLayout>
            <PageContent className="max-w-sm pt-16">
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
                  <Button width="full" onClick={() => navigate('complete')}>
                    Next
                  </Button>
                  <Button width="full">Previous</Button>
                </div>
              </form>
            </PageContent>
          </StackedLayout>
        }
      />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
}

export default ScytheCalculatorRouter;
