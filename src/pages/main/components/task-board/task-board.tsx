import { TaskBoardProps } from "./task-boards.types";
import { TaskCard } from "./task-card";

const TaskBoard: React.FC<TaskBoardProps> = ({ tasksList, isLoading }) => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="bg-tusky-teal rounded-2xl p-6 shadow-lg">
        {/* Board Header */}
        <h2 className="text-tusky-peach mb-6 text-xl font-bold">Task Board</h2>

        {/* Task Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            <p className="text-tusky-green">Loading tasks...</p>
          ) : tasksList && tasksList.length > 0 ? (
            tasksList.map((task) => <TaskCard {...task} key={task.id} />)
          ) : (
            <p className="text-tusky-peach/70">No tasks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default TaskBoard;
