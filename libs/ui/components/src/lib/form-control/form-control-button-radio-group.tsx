import { cleanClasses } from "@scorecerer/util";
import { BaseSyntheticEvent, useState } from "react";
import FormControlButtonRadio, { FormControlButtonRadioProps } from "./form-control-button-radio";

export interface FormControlButtonRadioGroupProps {
  onChange?: (event: BaseSyntheticEvent) => unknown;
  initialValue?: string | null;
  className?: string;
  options: FormControlButtonRadioProps[],
}

export function FormControlButtonRadioGroup(
  { initialValue, onChange, options, className, ...props }: FormControlButtonRadioGroupProps
) {
  const [value, setValue] = useState(initialValue);
  const onButtonRadioChange = (event: BaseSyntheticEvent) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  const classes = cleanClasses('flex flex-col w-full gap-y-1', className || '');

  return (
    <div className={classes} {...props}>
      {options.map(
        ({ children, ...option }, index) => {
          console.log(value);
          console.log(option.value);
          return <div key={`form-control-button-radio-group-${index}`}>
            <FormControlButtonRadio
              onChange={onButtonRadioChange}
              checked={(!!value && value === option.value)}
              {...option}
            >
              {children}
            </FormControlButtonRadio>
          </div>;
        }
      )
      }
    </div >
  );
}

export default FormControlButtonRadioGroup;
