import { Typography } from '@scorecerer/ui/components';
import { PageContent, StackedLayout } from '@scorecerer/ui/layout';

/* eslint-disable-next-line */
export interface ScytheTestProps {}

export function ScytheTest(props: ScytheTestProps) {
  return (
    <StackedLayout>
      <PageContent header="Dashboard">
        <Typography variant="p">Hello World</Typography>
      </PageContent>
    </StackedLayout>
  );
}

export default ScytheTest;
