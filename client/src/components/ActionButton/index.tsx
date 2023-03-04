import styled from "styled-components";

import { ActionButtonProps } from "./types";

const StyledButton = styled.button``;

const ActionButton = ({ title }: ActionButtonProps) => {
  return (
    <>
      <StyledButton>{title}</StyledButton>
    </>
  );
};

export default ActionButton;
