import { ReactNode } from 'react';
import PageHeader from '../shared/page-header/page-header';

export interface StackedLayoutProps {
  children?: ReactNode;
}

export function StackedLayout({ children }: StackedLayoutProps) {
  return (
    <div className="min-h-screen px-1 pb-20 bg-overlap xl:px-20 md:px-10">
      <PageHeader />
      {children}
    </div>
  );
}

export default StackedLayout;
