import { HTMLProps } from 'react';

/* eslint-disable-next-line */
export interface FormControlProps extends HTMLProps<HTMLInputElement> {}

export function FormControl({ className, ...props }: FormControlProps) {
  return (
    <input
      className={
        'block w-full px-3 py-1.5 text-base font-normal text-gray-700 ' +
          'bg-white bg-clip-padding border border-solid border-gray-300 ' +
          'rounded transition ease-in-out m-0 ' +
          className || ' '
      }
      {...props}
    />
  );
}

export default FormControl;
