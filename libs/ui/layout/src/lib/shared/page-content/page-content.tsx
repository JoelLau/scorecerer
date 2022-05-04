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
      className="flex flex-col gap-3 px-4 pb-8 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      {header && (
        <PageContentHeader>
          <Typography tag="h1" className="pt-4 pb-8 text-white">
            {header}
          </Typography>
        </PageContentHeader>
      )}
      <PageContentBody className="min-h-screen px-4 py-8 bg-white rounded">
        {children}
      </PageContentBody>
    </main>
  );
}

export default PageContent;
