import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ],
  {
    variants: {
      type: {
        primary:
          "bg-tusky-red text-white hover:bg-tusky-coral focus:ring-tusky-red disabled:bg-tusky-red disabled:text-white",
        secondary:
          "bg-tusky-green text-tusky-teal hover:bg-tusky-peach focus:ring-tusky-green disabled:bg-tusky-green disabled:text-tusky-teal",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      type: "primary",
      size: "md",
    },
  }
);
