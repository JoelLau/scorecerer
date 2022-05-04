import { ReactNode } from 'react';
import { cleanClasses, TEST_IDS } from '@scorecerer/util';

/* eslint-disable-next-line */
export interface PageContentBodyProps {
  children?: ReactNode;
  className?: string;
}

export function PageContentBody({ className, ...props }: PageContentBodyProps) {
  const classes = cleanClasses('py-6', className || '');

  return (
    <div
      data-testid={TEST_IDS.PAGE_CONTENT_BODY}
      className={classes}
      {...props}
    />
  );
}

export default PageContentBody;
