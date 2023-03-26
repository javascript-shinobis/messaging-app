import { ActionButtonProps } from './types';

function ActionButton({
  label,
  type,
  loading,
  onClick,
  disabled,
}: ActionButtonProps) {
  return (
    <button
      className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-md cursor-pointer text-white bg-cyan-600 hover:bg-cyan-700 w-full my-4 ${
        loading && 'loading'
      }`}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ActionButton;
