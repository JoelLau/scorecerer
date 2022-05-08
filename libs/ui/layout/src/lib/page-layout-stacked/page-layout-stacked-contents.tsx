import { cleanClasses } from '@scorecerer/util';
import { ReactNode } from 'react';

export interface PageLayoutStackedContentsProps {
  className?: string;
  children?: ReactNode;
}

export function PageLayoutStackedContents({
  className,
  ...props
}: PageLayoutStackedContentsProps) {
  const classes = cleanClasses('min-h-screen min-w-xs border', className || '');

  return <div className={classes} {...props} />;
}

export default PageLayoutStackedContents;
