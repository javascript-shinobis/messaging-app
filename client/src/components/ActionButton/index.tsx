import { ActionButtonProps } from "./types";

const ActionButton = ({ label, onClick, loading }: ActionButtonProps) => {
  return (
    <>
      <button
        className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ${
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
