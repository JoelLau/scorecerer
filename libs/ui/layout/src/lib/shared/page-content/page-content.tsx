import { Typography } from '@scorecerer/ui/components';
import { cleanClasses, TEST_IDS } from '@scorecerer/util';
import { ReactNode } from 'react';
import PageContentBody from './page-content-body';
import PageContentHeader from './page-content-header';

export interface PageContentProps {
  children?: ReactNode;
  className?: string;
  header?: string;
}

export const PageContent = ({
  children,
  className,
  header,
}: PageContentProps) => {
  const classes = cleanClasses(
    'flex flex-col gap-3 pb-8 mx-auto',
    className || ''
  );

  return (
    <main data-testid={TEST_IDS.PAGE_CONTENT} className={classes}>
      {header && (
        <PageContentHeader>
          <Typography tag="h1" className="pt-4 pb-8 text-white">
            {header}
          </Typography>
        </PageContentHeader>
      )}
      <PageContentBody>{children}</PageContentBody>
    </main>
  );
};

export default PageContent;
