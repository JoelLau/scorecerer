import { ReactNode } from 'react';
import { cleanClasses, TEST_IDS } from '@scorecerer/util';

/* eslint-disable-next-line */
export interface PageContentBodyProps {
  children?: ReactNode;
  className?: string;
}

export const PageContentBody = ({
  className,
  ...props
}: PageContentBodyProps) => {
  const classes = cleanClasses(
    'min-h-screen md:min-h-0 p-8 bg-white rounded-lg',
    className || ''
  );

  return (
    <div
      data-testid={TEST_IDS.PAGE_CONTENT_BODY}
      className={classes}
      {...props}
    />
  );
};

export default PageContentBody;
