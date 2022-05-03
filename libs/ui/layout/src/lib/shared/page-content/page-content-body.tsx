import { ReactNode } from 'react';
import { TEST_IDS } from '@scorecerer/util';

/* eslint-disable-next-line */
export interface PageContentBodyProps {
  children?: ReactNode;
  className?: string;
}

export function PageContentBody(props: PageContentBodyProps) {
  return (
    <div data-testid={TEST_IDS.PAGE_CONTENT_BODY} className="py-6" {...props} />
  );
}

export default PageContentBody;
