import { ActionButtonProps } from "./types";

const ActionButton = ({ label, type, loading }: ActionButtonProps) => {
  return (
    <>
      <button
        className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-md cursor-pointer text-white bg-cyan-600 hover:bg-cyan-700 w-full ${
          loading && "loading"
        }`}
        type={type}
      >
        {label}
      </button>
    </>
  );
};

export default ActionButton;
