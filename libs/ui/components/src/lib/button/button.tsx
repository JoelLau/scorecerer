import { cleanClasses } from '@scorecerer/util';
import { BaseSyntheticEvent, ReactNode } from 'react';

export type ButtonProps =
  | SubmitButtonProps
  | ResetButtonProps
  | SimpleButtonProps;

export interface SubmitButtonProps extends BaseButtonProps {
  type: 'submit-button';
}

export interface ResetButtonProps extends BaseButtonProps {
  type: 'reset-button';
}

export interface SimpleButtonProps extends BaseButtonProps {
  type?: 'simple-button';
}

export interface BaseButtonProps extends UiComponentBaseProps {
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
  children?: ReactNode;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const BaseElement = getButtonBaseElement;
  const classes = getButtonClasses(props);

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
}: ButtonProps): string => {
  return cleanClasses(
    'test-button-base inline-flex items-center px-4 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex justify-center',
    variant === 'cta'
      ? 'test-button-cta       border-transparent  text-white        bg-indigo-600   hover:bg-indigo-700'
      : '',
    !variant || variant === 'default'
      ? 'test-button-default   border-gray-300     text-gray-700     bg-white        hover:bg-gray-50'
      : '',
    disabled || variant === 'disabled'
      ? 'test-button-disabled  border-gray-300     text-gray-700     bg-white        hover:bg-gray-50'
      : ''
  );
};

export default Button;
