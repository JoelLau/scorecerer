import { cleanClasses } from '@scorecerer/util';
import { ReactNode } from 'react';

export interface PageLayoutStackedBackgroundProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export function PageLayoutStackedBackground({
  className,
  ...props
}: PageLayoutStackedBackgroundProps) {
  const classes = cleanClasses(
    'bg-overlap min-h-screen flex items-start justify-center',
    className || ''
  );

  return <div className={classes} {...props} />;
}

export default PageLayoutStackedBackground;
