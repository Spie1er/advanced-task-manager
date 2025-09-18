import { cva } from "class-variance-authority";

export const searchInputStyles = cva([
  "bg-tusky-teal w-full text-sm text-white placeholder-gray-400 ",
  "border-tusky-green rounded-lg border",
  "focus:border-tusky-coral focus:ring-tusky-coral focus:ring-2",
  "py-2 pr-3 pl-9",
]);
