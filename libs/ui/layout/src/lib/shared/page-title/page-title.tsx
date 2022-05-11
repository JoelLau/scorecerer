import { Typography } from '@scorecerer/ui/components';
import { cleanClasses } from '@scorecerer/util';
import { ReactChild } from 'react';
import PageTitleBreadcrumb, { BreadCrumbPiece } from './page-title-breadcrumb';

export interface PageTitleProps {
  className?: string;
  children?: ReactChild;
  breadcrumbPieces?: BreadCrumbPiece[];
}

export function PageTitle({
  className,
  children,
  breadcrumbPieces,
}: PageTitleProps) {
  const classes = cleanClasses(
    'w-full bg-transparent m-0 p-6 pb-8 pt-0 text-white',
    className || ''
  );

  if (!children && !breadcrumbPieces) {
    return null;
  }

  return (
    <div className={classes}>
      <PageTitleBreadcrumb pieces={breadcrumbPieces} />
      {typeof children === 'string' ? (
        <Typography tag="h1">{children}</Typography>
      ) : (
        children
      )}
    </div>
  );
}

export default PageTitle;
