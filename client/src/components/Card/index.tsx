import { CardProps } from "./types";

/**
 * @date 2023-02-21
 * @description A wrapper card component for our application
 * Divides components into three section
 * @param {ReactDOM} {children}
 * @returns {any}
 */
export const Card = ({ children }: CardProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 border-slate-300">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
};

Card.Header = ({ children }: CardProps) => (
  <div className="text-lg justify-center flex font-semibold p-3">
    {children}
  </div>
);

Card.Body = ({ children }: CardProps) => (
  <div className="shadow bg-white p-6 rounded-lg w-96 mx-auto">{children}</div>
);

Card.Footer = ({ children }: CardProps) => (
  <div className=" mt-2 bg-white justify-center  rounded-lg flex gap-1 w-96 mx-auto">
    {children}
  </div>
);
