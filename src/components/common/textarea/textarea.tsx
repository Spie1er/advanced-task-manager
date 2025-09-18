import { ComponentProps, useId } from "react";
import {
  TextAreaFieldProps,
  textAreaLabelStyles,
  textAreaStyles,
} from "./index";

const TextAreaField: React.FC<
  TextAreaFieldProps & Omit<ComponentProps<"textarea">, "onChange">
> = ({ value, label, onChange, disabled, isError, errorText, ...props }) => {
  const id = useId();

  return (
    <div className="w-full">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange?.(e.currentTarget.value)}
          {...props}
          disabled={disabled}
          id={id}
          className={textAreaStyles({
            error: isError,
            disabled,
          })}
          placeholder=" "
        />
        <label
          htmlFor={id}
          className={textAreaLabelStyles({
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

export default TextAreaField;
