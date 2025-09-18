import React, { useState } from "react";
import { Button } from "@/components/common/button";
import { Check } from "lucide-react";
import { Priority } from "@/api/tasks";
import { PriorityChangerProps } from "./priority-changer.types";

const priorityMap: Record<Priority, { label: string; classes: string }> = {
  [Priority.LOW]: {
    label: "Low",
    classes: "bg-tusky-green/20 text-tusky-green",
  },
  [Priority.MEDIUM]: {
    label: "Medium",
    classes: "bg-tusky-coral/20 text-tusky-coral",
  },
  [Priority.HIGH]: { label: "High", classes: "bg-tusky-red/20 text-tusky-red" },
};

const PriorityChanger: React.FC<PriorityChangerProps> = ({
  taskPriority,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = Object.values(Priority).filter(
    (v) => typeof v === "number"
  ) as Priority[];
  const currentOption = options.find((o) => o === taskPriority) ?? Priority.LOW;

  return (
    <div className="relative w-[200px]">
      {/* Priority Button (reflects current priority and opens dropdown) */}
      <Button
        type="secondary"
        text={`Priority: ${priorityMap[currentOption].label}`}
        className={`w-full font-medium ${priorityMap[currentOption].classes}`}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {/* Dropdown */}
      {isOpen && (
        <div className="border-tusky-green bg-tusky-teal absolute right-0 z-10 mt-2 w-full rounded-lg border shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              className={`hover:bg-tusky-green/20 flex w-full items-center justify-between px-3 py-2 text-sm font-medium ${
                priorityMap[option].classes
              } ${taskPriority === option ? "font-semibold" : ""}`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {priorityMap[option].label}
              {taskPriority === option && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriorityChanger;
