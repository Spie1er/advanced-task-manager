import { Priority } from "@/api/tasks";

const priorityMap: Record<number, { classes: string; label: string }> = {
  [Priority.LOW]: {
    classes: "bg-tusky-green/20 text-tusky-green",
    label: "Low",
  },
  [Priority.MEDIUM]: {
    classes: "bg-tusky-coral/20 text-tusky-coral",
    label: "Medium",
  },
  [Priority.HIGH]: {
    classes: "bg-tusky-red/20 text-tusky-red",
    label: "High",
  },
};

type TaskPriorityTagProps = {
  taskPriority: number;
};

const TaskPriorityTag: React.FC<TaskPriorityTagProps> = ({ taskPriority }) => {
  const { classes, label } =
    priorityMap[taskPriority] ?? priorityMap[Priority.LOW];

  return (
    <span className={`rounded-md px-2 py-1 text-xs font-medium ${classes}`}>
      Priority: {label}
    </span>
  );
};

export default TaskPriorityTag;
