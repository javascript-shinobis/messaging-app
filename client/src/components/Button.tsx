 import React, {
    DetailedHTMLProps,
    forwardRef,
    ButtonHTMLAttributes,
  } from "react";
  
  const Button = forwardRef<
    HTMLButtonElement,
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  >(({ className, children, ...rest }, ref) => {
    return (
      <Button
        className={`border-2 border-gray-900 bg-blue-600 rounded p-2 w-full
        text-white font-bold hover:bg-blue-500 focus:bg-blue-400
        transition-colors disabled:bg-gray-500 ${className}`}
        {...rest}
        ref={ref}
      >
        {children}
        </Button>
    );
  });
  
  export default Button;
  