import { BaseSyntheticEvent, ReactNode } from 'react';

export interface FormControlButtonRadioProps {
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  checked?: boolean;
  children?: ReactNode | ReactNode[];
  onChange?: (event: BaseSyntheticEvent) => unknown;
  value?: string | number | readonly string[];
}

export function FormControlButtonRadio({
  className,
  type,
  name: rawName,
  id: rawId,
  children,
  checked,
  onChange,
  ...props
}: FormControlButtonRadioProps) {
  const name = rawName || rawId;
  const id = rawId || rawName;

  const onChangeHandler = (event: BaseSyntheticEvent) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <label
      className={[
        'base-button-radio flex flex-row justify-start items-center p-4 gap-x-2 relative text-center rounded-lg border shadow-sm border-gray-300 hover:bg-gray-200 cursor-pointer text-gray-800 font-medium',
        checked ? 'bg-green-200 border-green-500 hover:bg-green-400 ' : '',
        className || '',
      ].join(' ')}
      htmlFor={id}
      data-testid="button-radio-label"
    >
      <input
        type="radio"
        id={id}
        name={name}
        checked={!!checked}
        data-testid="form-control-button-radio"
        onChange={onChangeHandler}
        {...props}
      />
      {children}
    </label>
  );
}

export default FormControlButtonRadio;
