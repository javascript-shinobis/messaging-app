/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from 'react';

const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={`py-1 px-2 border border-gray-400 focus:border-blue-500 outline-none rounded w-full input-primary bg-gray-200 text-black ${className}`}
      {...rest}
      ref={ref}
    />
  );
});

export default Input;
