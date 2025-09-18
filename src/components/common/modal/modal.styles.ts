import { cva } from "class-variance-authority";

export const modalContainerStyles = cva(
  [
    "relative w-full rounded-2xl bg-tusky-teal shadow-lg text-white",
    "border border-tusky-green/30",
    "transition-transform duration-200",
  ],
  {
    variants: {
      size: {
        small: "max-w-sm",
        medium: "max-w-lg",
        large: "max-w-2xl",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);
