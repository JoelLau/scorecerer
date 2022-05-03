import { TEST_IDS } from '@scorecerer/util';
import { ReactNode } from 'react';

export interface PageContentHeaderProps {
  children?: ReactNode;
  className?: string;
}

export function PageContentHeader(props: PageContentHeaderProps) {
  return (
    <header
      data-testid={TEST_IDS.PAGE_CONTENT_HEADER}
      className="grid grid-cols-2 gap-y-1"
      {...props}
    />
  );
}

export default PageContentHeader;
