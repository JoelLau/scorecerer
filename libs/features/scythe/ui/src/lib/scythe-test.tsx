import { Typography } from '@scorecerer/ui/components';
import { StackedLayout } from '@scorecerer/ui/layout';

/* eslint-disable-next-line */
export interface ScytheTestProps {}

export function ScytheTest(props: ScytheTestProps) {
  return (
    <StackedLayout>
      <main className="flex flex-col min-h-screen gap-3 px-4 pt-6 pb-8 bg-white rounded-md shadow sm:px-6 lg:px-8">
        <header className="grid grid-cols-2 gap-y-1">
          <Typography variant="h1" className="text-gray-900">
            Dashboard
          </Typography>
        </header>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-gray-200 border-dashed rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </StackedLayout>
  );
}

export default ScytheTest;
