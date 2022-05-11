import { cleanClasses } from '@scorecerer/util';
import { ReactNode } from 'react';

export interface CardProps {
  className?: string;
  children?: ReactNode | ReactNode[];
}

export function Card({ className, ...props }: CardProps) {
  const classes = cleanClasses(
    'relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-md p-5 pb-8 flex flex-col justify-start items-center gap-y-8',
    className || ''
  );
  return <div className={classes} {...props} />;
}

export default Card;
