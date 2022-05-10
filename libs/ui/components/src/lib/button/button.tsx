import { cleanClasses } from '@scorecerer/util';
import { BaseSyntheticEvent, ReactNode } from 'react';

export type ButtonProps =
  | SubmitButtonProps
  | ResetButtonProps
  | SimpleButtonProps;

export type SubmitButtonProps = BaseButtonProps & {
  type: 'submit-button';
}

export type ResetButtonProps = BaseButtonProps & {
  type: 'reset-button';
}

export type SimpleButtonProps = BaseButtonProps & {
  type?: 'simple-button';
}

export type BaseButtonProps = UiComponentBaseProps & {
  // use 'default' if not falsy
  variant?: 'cta' | 'default' | 'disabled';

  // overrides variant to 'active'
  active?: boolean;

  // overrides variant to 'disabled'
  disabled?: boolean;

  // focus when loaded
  autoFocus?: boolean;

  // *
  tabIndex?: number;

  // *
  onClick?: (event: BaseSyntheticEvent) => unknown;
}

export interface UiComponentBaseProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}

export const Button = ({ className, ...props }: ButtonProps) => {
  const BaseElement = getButtonBaseElement;
  const classes = getButtonClasses({ className, ...props });

  return <BaseElement className={classes} {...props} />;
};

export const getButtonBaseElement = ({ type, ...props }: ButtonProps) => {
  switch (type) {
    case 'submit-button':
      return <button type="submit" {...props} />;
    case 'reset-button':
      return <button type="reset" {...props} />;
    case 'simple-button':
    default:
      return <button type="button" {...props} />;
  }
};

export const getButtonClasses = ({
  variant,
  disabled,
  className = '',
}: ButtonProps): string => {
  return cleanClasses(
    'test-button-base inline-flex items-center px-4 py-2 border rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex justify-center',
    variant === 'cta'
      ? 'test-button-cta       border-indigo-800  text-white        bg-indigo-500   hover:bg-indigo-700   shadow-md'
      : '',
    !variant || variant === 'default'
      ? 'test-button-default   border-gray-300     text-gray-700     bg-white        hover:bg-gray-50     shadow-sm'
      : '',
    disabled || variant === 'disabled'
      ? 'test-button-disabled  border-gray-300     text-gray-700     bg-white        hover:bg-gray-50     shadow-sm'
      : '',
    className
  );
};

export default Button;
