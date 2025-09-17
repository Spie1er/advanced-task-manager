export type CompletionFilterProps = {
  selectedFilter: FilterOption;
  onFilterChange: (option: FilterOption) => void;
  setFilterDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
  filterDropdownOpen: boolean
};

export type FilterOption = "all" | "completed" | "pending";
