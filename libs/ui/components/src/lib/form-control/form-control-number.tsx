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
}

export function FormControlNumber({
  className,
  ...props
}: FormControlNumberProps) {
  return (
    <input
      type="number"
      className={
        'mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md p-2 pr-0' +
          className || ''
      }
      data-testid="form-control-number"
      {...props}
    />
  );
}

export default FormControlNumber;
