import { cva } from "class-variance-authority";

export const taskCardContainer = cva([
  "bg-tusky-green/10 cursor-pointer p-4 shadow-sm transition ",
  "hover:border-tusky-coral hover:shadow-md",
  "rounded-xl border border-tusky-green/40",
  "flex flex-col h-full",
]);
