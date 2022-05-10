import { FormControlBaseProps } from './form-control';

export interface FormControlNumberProps extends FormControlBaseProps {
  min?: number;
  max?: number;
  id?: string;
  name?: string;
  placeholder?: string;
  autoFocus?: boolean;
}

export function FormControlNumber(props: FormControlNumberProps) {
  return <input type="number" data-testid="form-control-number" {...props} />;
}

export default FormControlNumber;
