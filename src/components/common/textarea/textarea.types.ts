import { ReactNode } from "react";

export type TextAreaFieldProps = {
  rows?: number;
  isError?: boolean;
  errorText?: string;
  label: ReactNode;
  onChange: (val: string) => void;
};
