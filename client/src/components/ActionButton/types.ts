import { MouseEvent } from 'react';

export interface ActionButtonProps {
  bgColor?: string;
  label: string;
  labelColor?: string;
  loading?: boolean;
  type: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export interface StyledButtonProps {
  bg: string;
  labelcolor: string;
  loading: boolean;
}
