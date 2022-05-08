import { cleanClasses } from '@scorecerer/util';
import { ReactNode } from 'react';

export interface PageLayoutStackedContentsProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export function PageLayoutStackedContents({
  className,
  ...props
}: PageLayoutStackedContentsProps) {
  const classes = cleanClasses('min-h-screen w-full px-1 sm:max-w-sm', className || '');

  return <div className={classes} {...props} />;
}

export default PageLayoutStackedContents;
