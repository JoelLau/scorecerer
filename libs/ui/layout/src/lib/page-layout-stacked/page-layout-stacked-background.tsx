import { cleanClasses } from '@scorecerer/util';
import { ReactNode } from 'react';

export interface PageLayoutStackedBackgroundProps {
  className?: string;
  children?: ReactNode;
}

export function PageLayoutStackedBackground({
  className,
  ...props
}: PageLayoutStackedBackgroundProps) {
  const classes = cleanClasses(
    'bg-overlap min-h-screen',
    className || ''
  );

  return <div className={classes} {...props} />;
}

export default PageLayoutStackedBackground;
