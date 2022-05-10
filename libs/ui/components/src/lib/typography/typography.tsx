import { cleanClasses } from '@scorecerer/util';
import { ReactNode } from 'react';

export interface TypographyProps {
  tag?: TypographyTag;
  variant?: TypographyVariant;
  children?: ReactNode | ReactNode[];
  className?: string;
}

export const Typography = ({ className, ...props }: TypographyProps) => {
  const SementicElement = props.tag || 'div';
  const classes = cleanClasses(getTypographyClasses(props), className || '');

  return <SementicElement className={classes} {...props} />;
};

export default Typography;

const getTypographyClasses = ({ tag, variant }: TypographyProps): string => {
  return (
    (variant && TypographyVariantClassMap[variant]) ||
    (tag &&
      Object.keys(TypographyVariantClassMap).includes(tag) &&
      TypographyVariantClassMap[
      tag as keyof typeof TypographyVariantClassMap
      ]) ||
    TypographyVariantClassMap['p']
  );
};

export const TypographyVariantClassMap = {
  h1: 'text-3xl font-bold',
  h2: 'text-2xl font-bold',
  p: 'text-sm',
  button: 'text-sm',
  'brand-logo': 'text-lg font-bold',
  kbd: 'px-2.5 py-1 bg-gray-200 rounded-lg mx-2',
  link: 'text-sm hover:underline '
};

export type TypographyTag = 'h1' | 'h2' | 'p' | 'div' | 'kbd';

export type TypographyVariant = keyof typeof TypographyVariantClassMap;
