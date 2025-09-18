import { ReactNode } from "react";

export type InputFieldProps = {
  isError?: boolean;
  errorText?: string;
  label: ReactNode;
  onChange: (val: string) => void;
};
