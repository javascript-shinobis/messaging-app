import React, {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from "react";

const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={`py-1 px-2 border border-gray-400 focus:border-blue-500 outline-none rounded w-full 
      text-white font-bold hover:bg-blue-500 focus: bg-blue-400 ${className}`}
      {...rest}
      ref={ref}
    />
  );
});

export default Input;
