import { CardProps } from './types';

/**
 * @date 2023-02-21
 * @description A wrapper card component for our application
 * Divides components into three section
 * @param {ReactDOM} {children}
 */
export function Card({ children }: CardProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-full border-slate-300">
      <div className="max-w-md w-full">{children}</div>
    </div>
  );
}

Card.Header = function CardHeader({ children }: CardProps) {
  return (
    <div className="text-lg justify-center flex font-semibold p-3 text-cyan-500">
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children }: CardProps) {
  return (
    <div className="shadow bg-white p-6 rounded-lg w-96 mx-auto">
      {children}
    </div>
  );
};
Card.Footer = function CardFooter({ children }: CardProps) {
  return (
    <div className="mt-2 p-1  bg-white justify-center  rounded-lg flex gap-1 w-96 mx-auto">
      {children}
    </div>
  );
};
