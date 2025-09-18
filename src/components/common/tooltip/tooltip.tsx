import { ReactNode } from "react";
import { tooltipStyle } from "./tooltip.styles";

interface TooltipProps {
  children: ReactNode | string | number;
  tooltip: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip }) => {
  return (
    <div className="relative flex items-center">
      <div className="peer">{children}</div>
      <span className={tooltipStyle()}>{tooltip}</span>
    </div>
  );
};

export default Tooltip;
