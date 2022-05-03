import { PageContent, StackedLayout } from '@scorecerer/ui/layout';

/* eslint-disable-next-line */
export interface ScytheCalculatorPageProps {}

export function ScytheCalculatorPage(props: ScytheCalculatorPageProps) {
  return (
    <StackedLayout>
      <PageContent header="Scythe Calculator"></PageContent>
    </StackedLayout>
  );
}

export default ScytheCalculatorPage;
