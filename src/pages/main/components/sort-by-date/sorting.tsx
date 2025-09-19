import { Button } from "@/components/common/button";
import {
  CalendarArrowDown,
  CalendarArrowUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export type DateSortOption = "newest" | "oldest";

interface DateSortFilterProps {
  selectedSort: DateSortOption;
  onSortChange: (option: DateSortOption) => void;
  sortDropdownOpen: boolean;
  setSortDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateSortFilter: React.FC<DateSortFilterProps> = ({
  selectedSort,
  onSortChange,
  sortDropdownOpen,
  setSortDropdownOpen,
}) => {
  const options: DateSortOption[] = ["newest", "oldest"];

  return (
    <div className="relative">
      <Button
        text="By Date"
        type="secondary"
        className="w-full"
        iconEnd={
          selectedSort === "newest" ? (
            <CalendarArrowDown className="h-4 w-4" />
          ) : (
            <CalendarArrowUp className="h-4 w-4" />
          )
        }
        onClick={() => setSortDropdownOpen((prev) => !prev)}
      />

      {sortDropdownOpen && (
        <div className="border-tusky-green bg-tusky-teal absolute right-0 z-10 mt-2 w-40 rounded-lg border shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSortChange(option);
                setSortDropdownOpen(false);
              }}
              className={`hover:bg-tusky-green/20 flex w-full cursor-pointer items-center justify-between px-4 py-2 text-sm text-white ${
                selectedSort === option ? "font-semibold" : ""
              }`}
            >
              {option === "newest" ? "Newest" : "Oldest"}
              {selectedSort === option && (
                <span className="ml-1">
                  {option === "newest" ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronUp className="h-4 w-4" />
                  )}
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateSortFilter;
