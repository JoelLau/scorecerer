import { cleanClasses } from '@scorecerer/util';
import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
}

export function Button(props: ButtonProps) {
  const classes = getButtonClasses(props);
  return <button className={classes}>{props.children}</button>;
}

const getButtonClasses = (props: ButtonProps): string => {
  return cleanClasses(
    'inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
    ButtonVariantMapClass[props.variant || 'primary']
  );
};

export default Button;

export const ButtonVariantMapClass = {
  primary:
    'text-gray-700 bg-white hover:bg-gray-50 border-gray-300 focus:ring-indigo-500',
};

export type ButtonVariant = keyof typeof ButtonVariantMapClass;
