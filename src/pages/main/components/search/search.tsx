import { Search } from "lucide-react";
import { TaskSearchProps } from "./search.types";
import { searchInputStyles } from "./search.styles";

const TaskSearch: React.FC<TaskSearchProps> = ({ onSearch }) => {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search tasks..."
        className={searchInputStyles()}
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute top-2.5 left-2 h-4 w-4 text-gray-400" />
    </div>
  );
};

export default TaskSearch;
