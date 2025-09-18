import React, { useState } from "react";
import { Button } from "@/components/common/button";
import { Check } from "lucide-react";
import { StatusChangerProps } from "./status-change.types";

const StatusChanger: React.FC<StatusChangerProps> = ({
  completed,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      label: "Pending",
      value: false,
      classes: "bg-tusky-coral/20 text-tusky-coral",
    },
    {
      label: "Completed",
      value: true,
      classes: "bg-tusky-green/20 text-tusky-green",
    },
  ];

  const currentOption =
    options.find((o) => o.value === completed) ?? options[0];

  return (
    <div className="relative w-[200px]">
      {/* Main Button reflecting current status */}
      <Button
        type="secondary"
        text={`Status: ${currentOption.label}`}
        className={`w-full font-medium ${currentOption.classes}`}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {/* Dropdown */}
      {isOpen && (
        <div className="border-tusky-green bg-tusky-teal absolute right-0 z-10 mt-2 w-full rounded-lg border shadow-lg">
          {options.map((option) => (
            <button
              key={String(option.value)}
              className={`hover:bg-tusky-green/20 flex w-full cursor-pointer items-center justify-between px-3 py-2 text-sm font-medium ${option.classes} ${
                completed === option.value ? "font-semibold" : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
              {completed === option.value && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusChanger;
