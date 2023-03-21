import { ActionButtonProps } from "./types";

const ActionButton = ({ label, type, loading }: ActionButtonProps) => {
  return (
    <>
      <button
        className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg cursor-pointer text-white bg-cyan-600 hover:bg-cyan-700 ${
          loading && "loading"
        }`}
        type= {type}
      >
        {label}
      </button>
    </>
  );
};

export default ActionButton;
