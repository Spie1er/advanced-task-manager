import { Priority } from "@/api/tasks";

export type AddUpdateTaskModalProps = {
  isOpen: boolean;
  taskId?: string;
  onClose: () => void;
};

export type TaskFormValues = {
  id: string | null;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  createdAt: string | null;
};
