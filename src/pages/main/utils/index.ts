import { CreateTaskPayload, UpdateTaskPayload } from "@/api/tasks";
import { TaskFormValues } from "../components/add-update-task/add-update-task.types";

export const transformTaskFormValuesToCreatePayload = (
  values: TaskFormValues
): CreateTaskPayload => {
  return {
    title: values.title,
    description: values.description,
    priority: values.priority,
    completed: values.completed,
    createdAt: new Date().toISOString(),
  };
};

export const transformTaskFormValuesToUpdatePayload = (
  values: TaskFormValues
): UpdateTaskPayload => {
  return {
    title: values.title,
    description: values.description,
    priority: values.priority,
    completed: values.completed,
  };
};
