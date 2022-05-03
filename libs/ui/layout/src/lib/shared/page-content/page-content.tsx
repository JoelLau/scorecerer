import { Typography } from '@scorecerer/ui/components';
import { TEST_IDS } from '@scorecerer/util';
import { ReactNode } from 'react';
import PageContentBody from './page-content-body';
import PageContentHeader from './page-content-header';

export interface PageContentProps {
  header?: string;
  children?: ReactNode;
}

export function PageContent({ header, children }: PageContentProps) {
  return (
    <main
      data-testid={TEST_IDS.PAGE_CONTENT}
      className="flex flex-col min-h-screen gap-3 px-4 pt-6 pb-8 bg-white rounded-md shadow sm:px-6 lg:px-8"
    >
      {header && (
        <PageContentHeader>
          <Typography variant="h1">{header}</Typography>
        </PageContentHeader>
      )}
      <PageContentBody>{children}</PageContentBody>
    </main>
  );
}

export default PageContent;
