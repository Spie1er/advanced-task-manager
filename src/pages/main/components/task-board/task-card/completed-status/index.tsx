type TaskStatusTagProps = {
  completed: boolean;
};

const TaskStatusTag: React.FC<TaskStatusTagProps> = ({ completed }) => {
  const statusMap = {
    true: {
      classes: "bg-tusky-green/20 text-tusky-green",
      label: "Completed",
    },
    false: {
      classes: "bg-tusky-coral/20 text-tusky-coral",
      label: "Pending",
    },
  };

  const { classes, label } = completed ? statusMap.true : statusMap.false;

  return (
    <span className={`rounded-md px-2 py-1 text-xs font-medium ${classes}`}>
      {label}
    </span>
  );
};

export default TaskStatusTag;
