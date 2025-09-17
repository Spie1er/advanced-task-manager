import { Task } from "@/api/tasks";

export type TaskBoardProps = {
  tasksList: Task[];
  isLoading: boolean;
};
