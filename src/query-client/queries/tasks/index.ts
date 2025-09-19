import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import {
  getAllTasks,
  getSingleTask,
  Task,
  TaskListResponse,
} from "@/api/tasks";
import { TASKS_QUERY_KEY } from "./index.enum";
import { TuskyErrorResponse } from "@/api/index.types";

export const useGetAllTasks = <T>({
  queryOptions,
  queryParams,
}: {
  queryOptions?: Omit<
    UseQueryOptions<TaskListResponse, TuskyErrorResponse, T>,
    "queryKey"
  >;
  queryParams?: Record<string, string | boolean | undefined> | null;
}): UseQueryResult<T, TuskyErrorResponse> => {
  return useQuery<TaskListResponse, TuskyErrorResponse, T>({
    queryKey: [TASKS_QUERY_KEY.LIST, queryParams],
    queryFn: () => getAllTasks(queryParams),
    retry: false,
    gcTime: 0,
    staleTime: 0,
    ...queryOptions,
  });
};

export const useGetSingleTask = <T>({
  taskId,
  queryOptions,
}: {
  taskId?: string;
  queryOptions?: Omit<UseQueryOptions<Task, TuskyErrorResponse, T>, "queryKey">;
}): UseQueryResult<T, TuskyErrorResponse> => {
  return useQuery<Task, TuskyErrorResponse, T>({
    queryKey: [TASKS_QUERY_KEY.SINGLE],
    queryFn: () => getSingleTask(taskId),
    retry: false,
    gcTime: 0,
    staleTime: 0,
    ...queryOptions,
  });
};
