import { MouseEvent, ReactElement, ReactNode } from "react";

export type ButtonProps = {
  text: string | ReactElement;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: ButtonTypes;
  size?: ButtonSizes;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  buttonType?: ButtonFunctionTypes;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
};

type ButtonTypes = "primary" | "secondary";
type ButtonFunctionTypes = "submit" | "reset" | "button";
type ButtonSizes = "sm" | "md" | "lg";
