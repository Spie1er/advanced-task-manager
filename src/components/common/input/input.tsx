import { ComponentProps, useId } from "react";
import {
  inputFieldLabelStyles,
  inputFieldStyles,
  type InputFieldProps,
} from "./index";

const InputField: React.FC<
  InputFieldProps & Omit<ComponentProps<"input">, "onChange">
> = ({ value, label, onChange, disabled, isError, errorText, ...props }) => {
  const id = useId();

  return (
    <div className="w-full">
      <div className="relative">
        <input
          value={value}
          onChange={(e) => onChange?.(e.currentTarget.value)}
          {...props}
          disabled={disabled}
          id={id}
          className={inputFieldStyles({
            error: isError,
            disabled,
          })}
          placeholder=" "
        />
        <label
          htmlFor={id}
          className={inputFieldLabelStyles({
            disabled,
          })}
        >
          {label}
        </label>
      </div>
      {isError && <p className="mt-1 text-sm text-red-500">{errorText}</p>}
    </div>
  );
};

export default InputField;
