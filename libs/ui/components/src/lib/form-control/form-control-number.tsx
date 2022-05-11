import { BaseSyntheticEvent, useRef } from 'react';
import { FormControlBaseProps } from './form-control';

export interface FormControlNumberProps extends FormControlBaseProps {
  min?: number;
  max?: number;
  id?: string;
  name?: string;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
  value?: number;
  onChange?: (event: BaseSyntheticEvent) => unknown;
}

export function FormControlNumber({
  className,
  onChange,
  ...props
}: FormControlNumberProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocusHandler = (event: BaseSyntheticEvent) => {
    event.target.select();
  };

  if (inputRef.current && props.value === undefined) {
    inputRef.current.value = '';
  }

  if (inputRef.current && props.autoFocus) {
    inputRef.current.focus();
  }

  const onChangeHandler = (event: BaseSyntheticEvent) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <input
      ref={inputRef}
      type="number"
      className={
        'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2 pr-0' +
          className || ''
      }
      data-testid="form-control-number"
      onFocus={onFocusHandler}
      onChange={onChangeHandler}
      {...props}
    />
  );
}

export default FormControlNumber;
