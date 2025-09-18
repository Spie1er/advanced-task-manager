import { cva } from "class-variance-authority";

export const inputFieldStyles = cva(
  [
    "peer block w-full rounded-xl text-white placeholder-transparent pt-5 pb-2 px-4",
    "border transition-colors duration-200",
    "bg-tusky-teal/10",
    "focus:outline-none focus:ring-1 focus:ring-tusky-peach focus:border-tusky-peach",
    "hover:border-tusky-green/70",
  ],
  {
    variants: {
      disabled: {
        true: "text-tusky-teal/50 border-tusky-green/30 cursor-not-allowed bg-tusky-teal/20",
        false: "cursor-text",
      },
      error: {
        true: "border-tusky-red text-tusky-red placeholder-tusky-red",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
      error: false,
    },
  }
);

export const inputFieldLabelStyles = cva(
  [
    "absolute left-4 top-1 text-tusky-peach text-sm transition-all duration-300",
    "peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-tusky-peach/50",
    "peer-placeholder-shown:peer-focus:-translate-y-[1px] peer-focus:text-sm peer-focus:text-tusky-peach",
  ],
  {
    variants: {
      disabled: {
        true: "text-tusky-teal/50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);
