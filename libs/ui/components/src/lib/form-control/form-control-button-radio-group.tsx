import { cleanClasses } from '@scorecerer/util';
import React, { BaseSyntheticEvent, useState } from 'react';
import { FormControlBaseProps } from './form-control';
import FormControlButtonRadio, {
  FormControlButtonRadioProps,
} from './form-control-button-radio';

export interface FormControlButtonRadioGroupProps extends FormControlBaseProps {
  onChange?: (event: BaseSyntheticEvent) => unknown;
  initialValue?: string | null;
  className?: string;
  options: FormControlButtonRadioProps[];
  name?: string;
}

export function FormControlButtonRadioGroup({
  initialValue,
  onChange,
  options,
  className,
}: FormControlButtonRadioGroupProps) {
  const [value, setValue] = useState(initialValue);
  const onButtonRadioChange = (event: BaseSyntheticEvent) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  const classes = cleanClasses('flex flex-col w-full gap-y-1', className || '');

  return (
    <div className={classes}>
      {options.map((option, index) => (
        <FormControlButtonRadio
          key={index}
          onChange={onButtonRadioChange}
          checked={!!value && value === option.value}
          {...option}
        />
      ))}
    </div>
  );
}

export default FormControlButtonRadioGroup;
