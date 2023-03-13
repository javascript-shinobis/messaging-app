import { ActionButtonProps } from "./types";

const ActionButton = ({ label, onClick, loading }: ActionButtonProps) => {
  return (
    <>
      <button
        className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg cursor-pointer text-white bg-cyan-600 hover:bg-cyan-700 ${
          loading && "loading"
        }`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default ActionButton;
