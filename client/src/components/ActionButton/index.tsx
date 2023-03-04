import styled from "styled-components";

import { ActionButtonProps, StyledButtonProps } from "./types";

const StyledButton = styled.button<ActionButtonProps>`
  padding: 4px 8px;
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledButtonProps) => props.bg ?? "blue"};
  color: ${(props: StyledButtonProps) => props.labelcolor ?? "white"};
`;

const ActionButton = ({
  label,
  bgColor,
  onClick,
  labelColor,
}: ActionButtonProps) => {
  return (
    <>
      <StyledButton bg={bgColor} labelcolor={labelColor} onClick={onClick}>
        {label}
      </StyledButton>
    </>
  );
};

export default ActionButton;
