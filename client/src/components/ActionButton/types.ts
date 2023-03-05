import React, { MouseEvent } from "react";

export interface ActionButtonProps {
  bgColor: string;
  label: string;
  labelColor: string;
  loading: boolean;
  onClick: (event: MouseEvent) => void;
}

export interface StyledButtonProps {
  bg: string;
  labelcolor: string;
  loading: boolean;
}
