import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { getAllTasks, TaskListResponse } from "@/api/tasks";
import { TASKS_QUERY_KEY } from "./index.enum";
import { TuskyErrorResponse } from "@/api/index.types";

export const useGetAllTasks = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<
    UseQueryOptions<TaskListResponse, TuskyErrorResponse, T>,
    "queryKey"
  >;
}): UseQueryResult<T, TuskyErrorResponse> => {
  return useQuery<TaskListResponse, TuskyErrorResponse, T>({
    queryKey: [TASKS_QUERY_KEY.LIST],
    queryFn: () => getAllTasks(),
    retry: false,
    gcTime: 0,
    staleTime: 0,
    ...queryOptions,
  });
};
