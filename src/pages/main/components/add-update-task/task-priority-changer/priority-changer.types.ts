import { Priority } from "@/api/tasks";

export type PriorityChangerProps = {
  taskPriority: Priority;
  onChange: (val: Priority) => void;
};
