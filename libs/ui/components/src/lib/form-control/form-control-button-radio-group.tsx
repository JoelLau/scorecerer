import { cleanClasses } from '@scorecerer/util';
import React, { BaseSyntheticEvent } from 'react';
import Typography from '../typography/typography';
import { FormControlBaseProps } from './form-control';
import FormControlButtonRadio, {
  FormControlButtonRadioProps,
} from './form-control-button-radio';

export interface FormControlButtonRadioGroupProps extends FormControlBaseProps {
  onChange?: (event: BaseSyntheticEvent) => unknown;
  className?: string;
  options: FormControlButtonRadioProps[];
  name?: string;
  value?: FormControlButtonRadioProps['value'];
}

export function FormControlButtonRadioGroup({
  options,
  className,
  onChange,
  value,
}: FormControlButtonRadioGroupProps) {
  const classes = cleanClasses('flex flex-col w-full gap-y-1', className || '');

  const onChangeHandler = (event: BaseSyntheticEvent) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={classes}>
      {options.map((option, index) => (
        <FormControlButtonRadio
          key={index}
          checked={!!value && value === option.value}
          onChange={onChangeHandler}
          {...option}
        />
      ))}
    </div>
  );
}

export default FormControlButtonRadioGroup;
