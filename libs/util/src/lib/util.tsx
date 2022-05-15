import { Fragment, ReactNode } from 'react';

export const cleanClasses = (...str: string[]): string => {
  const rawClasses = str.join(' ').split(' ');
  const obj = rawClasses.reduce((prev, curr) => {
    const trimmed = curr.trim();
    prev[trimmed] = undefined;
    return prev;
  }, {} as { [key: string]: undefined });

  const uniqueClasses = Object.keys(obj);
  return uniqueClasses.join(' ');
};

export const renderChildren = (
  children: ReactNode | ReactNode[]
): ReactNode[] => {
  return Array.isArray(children)
    ? [children.map((child, index) => <Fragment key={index}>{child}</Fragment>)]
    : [children];
};
