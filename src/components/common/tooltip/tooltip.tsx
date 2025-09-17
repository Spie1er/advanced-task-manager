import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode | string | number;
  tooltip: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip }) => {
  return (
    <div className="relative flex items-center">
      <div className="peer">{children}</div>
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-all peer-hover:scale-100 peer-hover:opacity-100">
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
