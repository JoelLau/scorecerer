import { cleanClasses } from '@scorecerer/util';
import { ReactNode } from 'react';
import PageHeader from '../shared/page-header/page-header';
import PageLayoutStackedBackground from './page-layout-stacked-background';
import PageLayoutStackedContents from './page-layout-stacked-contents';

export interface PageLayoutStackedProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}

export function PageLayoutStacked({
  className,
  children,
  ...props
}: PageLayoutStackedProps) {
  const classes = cleanClasses(className || '');

  return (
    <PageLayoutStackedBackground>
      <PageLayoutStackedContents>
        <PageHeader />
        {className ? (
          <div {...{ className: classes, children, ...props }}></div>
        ) : (
          children
        )}
      </PageLayoutStackedContents>
    </PageLayoutStackedBackground>
  );
}

export default PageLayoutStacked;
