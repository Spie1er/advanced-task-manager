import { mapTaskList, Task } from "@/api/tasks";
import { useGetAllTasks } from "@/query-client/queries/tasks";
import { TaskBoard } from "../components/task-board";
import { useEffect, useState } from "react";
import { TaskSearch } from "../components/search";
import { CompletionFilter } from "../components/completion-filter";

type FilterOption = "all" | "completed" | "pending";

const HomePage = () => {
  const [localTaskList, setLocalTaskList] = useState<Task[]>([]);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("all");

  const { data: tasksList, isFetching: areTasksLoading } = useGetAllTasks({
    queryOptions: {
      select: mapTaskList,
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

    if (!tasksList) return;

    const filteredTasks = tasksList.filter((task) => {
      if (option === "completed") return task.completed;
      if (option === "pending") return !task.completed;
      return true; // all
    });

    setLocalTaskList(filteredTasks);
  };

  return (
    <>
      <div className="mx-auto mt-5 flex max-w-6xl items-center gap-4 px-4 pb-3">
        {/* Search Bar */}
        <TaskSearch onSearch={handleSearch} />
        {/* Completion Filter */}
        <CompletionFilter
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
          filterDropdownOpen={filterDropdownOpen}
          setFilterDropdownOpen={setFilterDropdownOpen}
        />
      </div>

      {/* Task Board */}
      <TaskBoard tasksList={localTaskList} isLoading={areTasksLoading} />
    </>
  );
};
export default HomePage;
