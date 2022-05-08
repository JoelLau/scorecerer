import { ReactNode } from 'react';
import PageHeader from '../shared/page-header/page-header';
import PageLayoutStackedBackground from './page-layout-stacked-background';
import PageLayoutStackedContents from './page-layout-stacked-contents';

export interface PageLayoutStackedProps {
  children?: ReactNode;
  className?: string;
}

export function PageLayoutStacked({
  className,
  ...props
}: PageLayoutStackedProps) {
  return (
    <PageLayoutStackedBackground className="flex items-start justify-center">
      <PageLayoutStackedContents>
        <PageHeader />
        {className ? <div {...{ className, ...props }}></div> : props.children}
      </PageLayoutStackedContents>
    </PageLayoutStackedBackground>
  );
}

export default PageLayoutStacked;
