import { Button } from "@/components/common/button";
import { CompletionFilterProps, FilterOption } from "./completion-filter.types";
import { Filter, Check } from "lucide-react";

const CompletionFilter: React.FC<CompletionFilterProps> = ({
  selectedFilter,
  onFilterChange,
  setFilterDropdownOpen,
  filterDropdownOpen,
}) => {
  const options: FilterOption[] = ["all", "completed", "pending"];

  return (
    <div className="relative">
      <Button
        text="By Status"
        type="secondary"
        iconEnd={<Filter className="h-4 w-4" />}
        onClick={() => setFilterDropdownOpen((prev) => !prev)}
      />

      {filterDropdownOpen && (
        <div className="border-tusky-green bg-tusky-teal absolute right-0 z-10 mt-2 w-40 rounded-lg border shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onFilterChange(option);
                setFilterDropdownOpen(false);
              }}
              className={`hover:bg-tusky-green/20 flex w-full items-center justify-between px-4 py-2 text-sm text-white ${
                selectedFilter === option ? "font-semibold" : ""
              }`}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
              {selectedFilter === option && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default CompletionFilter;
