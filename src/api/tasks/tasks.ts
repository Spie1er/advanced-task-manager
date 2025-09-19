import api from "@/api";
import { TASKS_ENDPOINTS } from "./tasks.enum";
import {
  CreateTaskPayload,
  Task,
  TaskListResponse,
  UpdateTaskPayload,
} from "./tasks.types";

export const getAllTasks = async (
  query?: Record<string, string | boolean | undefined> | null
) => {
  const res = await api.get<TaskListResponse>(TASKS_ENDPOINTS.LIST, {
    params: query,
  });
  return res.data;
};

export const getSingleTask = async (taskId?: string) => {
  const res = await api.get<Task>(TASKS_ENDPOINTS.LIST + `/${taskId}`);
  return res.data;
};

export const addTask = async (payload: CreateTaskPayload) => {
  const res = await api.post<Task>(TASKS_ENDPOINTS.LIST, payload);
  return res.data;
};

export const updateTask = async (
  taskId: string,
  payload: UpdateTaskPayload
) => {
  const res = await api.patch<Task>(TASKS_ENDPOINTS.SINGLE(taskId), payload);
  return res.data;
};

export const deleteTask = async (taskId: string) => {
  const res = await api.delete<{
    message: string;
  }>(TASKS_ENDPOINTS.SINGLE(taskId));
  return res.data;
};
