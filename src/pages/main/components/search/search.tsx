import { Search } from "lucide-react";
import { TaskSearchProps } from "./search.types";

const TaskSearch: React.FC<TaskSearchProps> = ({ onSearch }) => {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder="Search tasks..."
        className="focus:border-tusky-coral focus:ring-tusky-coral bg-tusky-teal border-tusky-green w-full rounded-lg border py-2 pr-3 pl-9 text-sm text-white placeholder-gray-400 focus:ring-2"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute top-2.5 left-2 h-4 w-4 text-gray-400" />
    </div>
  );
};

export default TaskSearch;
