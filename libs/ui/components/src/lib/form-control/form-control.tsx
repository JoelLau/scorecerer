import { ReactElement } from 'react';
import FormControlButtonRadio, {
  FormControlButtonRadioProps,
} from './form-control-button-radio';
import FormControlButtonRadioGroup, {
  FormControlButtonRadioGroupProps,
} from './form-control-button-radio-group';
import FormControlNumber, {
  FormControlNumberProps,
} from './form-control-number';

export interface FormControlBaseProps {
  className?: string;
  children?: ReactElement | null;
  validator?: (value: any) => string[];
  value?: any;
}

export type FormControlProps =
  | (FormControlNumberProps & {
      variant: 'number';
    })
  | (FormControlButtonRadioProps & {
      variant: 'button-radio';
    })
  | (FormControlButtonRadioGroupProps & {
      variant: 'button-radio-group';
    })
  | (React.HTMLProps<HTMLInputElement> &
      FormControlBaseProps & {
        variant?: 'text';
      });

export function FormControl({ variant, ...props }: FormControlProps) {
  switch (variant) {
    case 'button-radio':
      return <FormControlButtonRadio {...(props as FormControlNumberProps)} />;
    case 'button-radio-group':
      return (
        <FormControlButtonRadioGroup
          {...(props as FormControlButtonRadioGroupProps)}
        />
      );
    case 'number':
      return <FormControlNumber {...(props as FormControlNumberProps)} />;
    case 'text':
    default:
      return (
        <input
          type="text"
          data-testid="form-control-others"
          {...props}
          value={props.value as string}
        />
      );
  }
}

export default FormControl;
