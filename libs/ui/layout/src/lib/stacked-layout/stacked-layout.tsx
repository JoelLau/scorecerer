import { cleanClasses } from '@scorecerer/util';
import { ReactNode } from 'react';
import PageHeader from '../shared/page-header/page-header';

export interface StackedLayoutProps {
  children?: ReactNode;
  className?: string;
}

export const StackedLayout = ({ className, children }: StackedLayoutProps) => {
  const classes = cleanClasses(
    'min-h-screen px-1 pb-20 bg-overlap xl:px-24 md:px-10',
    className || ''
  );

  return (
    <div className={classes}>
      <PageHeader />
      {children}
    </div>
  );
};

export default StackedLayout;
