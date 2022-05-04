import { cleanClasses, TEST_IDS } from '@scorecerer/util';
import { ReactNode } from 'react';

export interface PageContentHeaderProps {
  children?: ReactNode;
  className?: string;
}

export function PageContentHeader({
  className,
  ...props
}: PageContentHeaderProps) {
  const classes = cleanClasses('grid grid-cols-2 gap-y-1', className || '');
  return (
    <header
      data-testid={TEST_IDS.PAGE_CONTENT_HEADER}
      className={classes}
      {...props}
    />
  );
}

export default PageContentHeader;
