import { mapTaskList, Task } from "@/api/tasks";
import { useGetAllTasks } from "@/query-client/queries/tasks";
import { TaskBoard } from "../components/task-board";
import { useEffect, useState } from "react";
import { TaskSearch } from "../components/search";
import { CompletionFilter } from "../components/completion-filter";
import DateSortFilter from "../components/sort-by-date/sorting";

type FilterOption = "all" | "completed" | "pending";
type DateSortOption = "newest" | "oldest";

const HomePage = () => {
  const [localTaskList, setLocalTaskList] = useState<Task[]>([]);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("all");
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<DateSortOption>("newest");

  const handleSortChange = (option: DateSortOption) => {
    setSelectedSort(option);
    setSortDropdownOpen(false);
  };

  const { data: tasksList, isFetching: areTasksLoading } = useGetAllTasks({
    queryOptions: {
      select: mapTaskList,
    },
    queryParams: {
      //TODO TECHDEBT - implement q: debouncedSearchTerm for the future - @KOTE
      _sort: selectedSort === "newest" ? "-createdAt" : "createdAt",
      completed:
        selectedFilter !== "all" ? selectedFilter === "completed" : undefined,
    },
  });

  useEffect(() => {
    if (tasksList) setLocalTaskList(tasksList);
  }, [tasksList]);

  const handleSearch = (searchTerm: string) => {
    const searchValue = searchTerm.toLowerCase();

    const filteredTasks = tasksList?.filter(
      (task) =>
        task.title.toLowerCase().includes(searchValue) ||
        task.description.toLowerCase().includes(searchValue)
    );

    setLocalTaskList(filteredTasks || []);
  };

  const handleFilterChange = (option: FilterOption) => {
    setSelectedFilter(option);
    setFilterDropdownOpen(false);
  };

  return (
    <>
      <div className="mx-auto mt-5 max-w-6xl px-4 pb-3">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          {/* Search Bar */}
          <div className="w-full md:flex-1">
            <TaskSearch onSearch={handleSearch} />
          </div>

          {/* Filters Row */}
          <div className="flex w-full gap-4 md:w-auto md:gap-4">
            {/* Completion Filter */}
            <div className="flex-1 md:flex-none">
              <CompletionFilter
                selectedFilter={selectedFilter}
                onFilterChange={handleFilterChange}
                filterDropdownOpen={filterDropdownOpen}
                setFilterDropdownOpen={setFilterDropdownOpen}
              />
            </div>

            {/* Sort Filter */}
            <div className="flex-1 md:flex-none">
              <DateSortFilter
                selectedSort={selectedSort}
                onSortChange={handleSortChange}
                sortDropdownOpen={sortDropdownOpen}
                setSortDropdownOpen={setSortDropdownOpen}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Task Board */}
      <TaskBoard tasksList={localTaskList} isLoading={areTasksLoading} />
    </>
  );
};
export default HomePage;
