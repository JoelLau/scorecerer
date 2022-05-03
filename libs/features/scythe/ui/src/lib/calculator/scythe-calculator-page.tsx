import { Button } from '@scorecerer/ui/components';
import { PageContent, StackedLayout } from '@scorecerer/ui/layout';
import { BaseSyntheticEvent } from 'react';

/* eslint-disable-next-line */
export interface ScytheCalculatorPageProps {}

export function ScytheCalculatorPage(props: ScytheCalculatorPageProps) {
  const onClick = (event: BaseSyntheticEvent) => {
    console.log(event);
  };

  return (
    <StackedLayout>
      <PageContent header="Scythe Calculator">
        <Button onClick={onClick} width="full">
          Get Started
        </Button>
      </PageContent>
    </StackedLayout>
  );
}

export default ScytheCalculatorPage;
