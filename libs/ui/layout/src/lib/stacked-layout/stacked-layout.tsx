import { ReactNode } from 'react';
import PageFooter from '../../shared/page-footer/page-footer';
import PageHeader from '../shared/page-header/page-header';

export interface StackedLayoutProps {
  children?: ReactNode;
}

export function StackedLayout({ children }: StackedLayoutProps) {
  return (
    <div className="min-h-screen text-white bg-gray-800 min-w-screen">
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  );
}

export default StackedLayout;
