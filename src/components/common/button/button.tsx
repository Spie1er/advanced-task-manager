import { buttonStyles } from "./button.styles";
import { ButtonProps } from "./button.types";
import { twMerge } from "tailwind-merge";
import Spinner from "@/assets/icons/spinner.svg?react";

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  isLoading,
  disabled,
  type = "primary",
  size = "md",
  onClick = () => {},
  buttonType = "button",
  iconStart,
  iconEnd,
}) => {
  return (
    <button
      disabled={disabled}
      type={buttonType}
      className={twMerge(buttonStyles({ type, size }), className)}
      onClick={onClick}
    >
      <span className="flex items-center justify-center gap-2">
        {iconStart && <span aria-hidden="true">{iconStart}</span>}
        {text}
        {iconEnd && <span aria-hidden="true">{iconEnd}</span>}
        {isLoading && <Spinner className="h-4 w-4 animate-spin text-current" />}
      </span>
    </button>
  );
};
export default Button;
