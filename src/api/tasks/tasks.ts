import api from "@/api";
import { TASKS_ENDPOINTS } from "./tasks.enum";
import { Task, TaskListResponse } from "./tasks.types";

export const getAllTasks = async (query?: Record<string, string> | null) => {
  const res = await api.get<TaskListResponse>(TASKS_ENDPOINTS.LIST, {
    params: query,
  });
  return res.data;
};

export const getSingleTask = async (taskId?: string) => {
  const res = await api.get<Task>(TASKS_ENDPOINTS.LIST + `/${taskId}`);
  return res.data;
};

export const addTask = async (payload: Task) => {
  const res = await api.post<{
    message: string;
  }>(TASKS_ENDPOINTS.LIST, payload);
  return res.data;
};

export const updateTask = async (taskId: string, payload: Task) => {
  const res = await api.patch<{
    message: string;
  }>(TASKS_ENDPOINTS.SINGLE(taskId), payload);
  return res.data;
};

export const deleteTask = async (taskId: string) => {
  const res = await api.patch<{
    message: string;
  }>(TASKS_ENDPOINTS.SINGLE(taskId));
  return res.data;
};
