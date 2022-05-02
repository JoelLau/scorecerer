import { ReactNode } from 'react';

/*
 * Philosophy:
 *    - all text in the app should be wrapped with the Typography component
 *    - the Typography component will:
 *        - provide consistent styling throughout the app
 *        - NOT imply sementic element
 *            - e.g. wrap this with <h1> tag if required
 */
export interface TypographyProps {
  variant?: TypographyVariant;
  children?: ReactNode;
}

export function Typography(props: TypographyProps) {
  const classes = getTypographyClasses(props);
  return <div className={classes}>{props.children}</div>;
}

const getTypographyClasses = (props: TypographyProps): string => {
  return TypographyVariantClassMap[props.variant || 'p'];
};

export default Typography;

export const TypographyVariantClassMap = {
  h1: 'text-3xl',
  p: 'text-sm',
  button: 'text-sm',
  'brand-logo': 'text-md font-bold',
};

export type TypographyVariant = keyof typeof TypographyVariantClassMap;
