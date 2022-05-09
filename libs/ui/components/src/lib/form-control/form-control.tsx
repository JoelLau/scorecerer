import { ReactChild } from 'react';
import FormControlButtonRadio from './form-control-button-radio';
import FormControlNumber, {
  FormControlNumberProps,
} from './form-control-number';

/* eslint-disable-next-line */
export type FormControlProps =
  | (FormControlNumberProps & {
      variant: 'number';
    })
  | (FormControlNumberProps & {
      variant: 'button-radio';
    })
  | (React.HTMLProps<HTMLInputElement> & {
      variant?: 'text';
      children?: ReactChild;
    });

export function FormControl({ variant, ...props }: FormControlProps) {
  switch (variant) {
    case 'button-radio':
      return <FormControlButtonRadio {...(props as FormControlNumberProps)} />;
    case 'number':
      return <FormControlNumber {...(props as FormControlNumberProps)} />;
    case 'text':
    default:
      return <input type="text" data-testid="form-control-others" {...props} />;
  }
}

export default FormControl;
