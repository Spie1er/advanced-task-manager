import { cva } from "class-variance-authority";

export const tooltipStyle = cva([
  "absolute -top-9 left-1/2 -translate-x-1/2 scale-0 ",
  "whitespace-nowrap text-white text-xs",
  "rounded bg-gray-800 px-2 py-1 ",
  "opacity-0 transition-all peer-hover:scale-100 peer-hover:opacity-100",
]);
