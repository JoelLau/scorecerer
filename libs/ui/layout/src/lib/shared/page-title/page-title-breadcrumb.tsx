import { Typography } from "@scorecerer/ui/components";
import { cleanClasses } from "@scorecerer/util";
import { ReactChild } from "react";
import { Link } from "react-router-dom";

/* eslint-disable-next-line */
export interface PageTitleBreadcrumbProps {
  pieces?: BreadCrumbPiece[]
  className?: string;
}

export function PageTitleBreadcrumb({ pieces, className }: PageTitleBreadcrumbProps) {
  const classes = cleanClasses(
    'flex list-none w-full text-sm',
    className || ''
  );

  if (pieces && pieces.length <= 0) {
    return null;
  }

  const listItemClasses = 'flex items-center justify-center breadcrumb-item ';
  const linkItemSeparatorClasses = ' before:content-["/"] before:text-white '

  return (
    <nav className={classes}>
      {(pieces || []).map(({ children, ...linkProps }, index) =>
        <li
          className={
            listItemClasses +
            (index > 0 ? linkItemSeparatorClasses : '')
          }
          key={`breadcrumb-key-${index}`}
        >
          <Link {...linkProps}>
            {typeof children === 'string' ? <Typography variant='link' children={children} /> : children}
          </Link>
        </li>)}
    </nav>
  )
}

export interface BreadCrumbPiece { children: ReactChild, to: string, target?: string };

export default PageTitleBreadcrumb;
