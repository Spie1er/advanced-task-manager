import { TuskyErrorResponse } from "@/api/index.types";
import {
  addTask,
  CreateTaskPayload,
  deleteTask,
  updateTask,
  UpdateTaskPayload,
} from "@/api/tasks";
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { Task } from "@/api/tasks";
import { toast } from "react-toastify";
import { TASKS_QUERY_KEY } from "@/query-client/queries/tasks/index.enum";

export const useAddParcelMutation = (
  mutationOptions?: UseMutationOptions<
    Task,
    TuskyErrorResponse,
    { payload: CreateTaskPayload },
    { previousTasks: Task[] | undefined }
  >
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ payload }) => addTask(payload),
    onMutate: async ({ payload }) => {
      await queryClient.cancelQueries({ queryKey: [TASKS_QUERY_KEY.LIST] });

      const previousTasks = queryClient.getQueryData<Task[]>([
        TASKS_QUERY_KEY.LIST,
      ]);

      const optimisticTask: Task = {
        id: `temp-${Date.now()}`,
        title: payload.title,
        createdAt: new Date().toISOString(),
        completed: payload.completed,
        description: payload.description,
        priority: payload.priority,
      };

      queryClient.setQueryData<Task[]>([TASKS_QUERY_KEY.LIST], (old = []) => [
        optimisticTask, //NOTE - @KOTE BECAUSE WE HAVE DESC ORDER BY DEFAULT, NEW TASK GOES FIRST
        ...old,
      ]);

      return { previousTasks };
    },
    onError: (err, _vars, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData([TASKS_QUERY_KEY.LIST], context.previousTasks);
      }
      const error = err as TuskyErrorResponse;
      toast.error(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY.LIST] });
    },
    ...mutationOptions,
  });
};

export const useUpdateTaskMutation = (
  mutationOptions?: UseMutationOptions<
    Task,
    TuskyErrorResponse,
    { taskId: string; payload: UpdateTaskPayload },
    { previousTasks: Task[] | undefined }
  >
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, payload }) => updateTask(taskId, payload),

    onMutate: async ({ taskId, payload }) => {
      await queryClient.cancelQueries({ queryKey: [TASKS_QUERY_KEY.LIST] });

      const previousTasks = queryClient.getQueryData<Task[]>([
        TASKS_QUERY_KEY.LIST,
      ]);

      queryClient.setQueryData<Task[]>([TASKS_QUERY_KEY.LIST], (old = []) =>
        old.map((task) => (task.id === taskId ? { ...task, ...payload } : task))
      );

      return { previousTasks };
    },

    onError: (_err, _vars, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData([TASKS_QUERY_KEY.LIST], context.previousTasks);
      }
      toast.error("Failed to update task.");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY.LIST] });
    },

    ...mutationOptions,
  });
};

export const useDeleteTaskMutation = (
  mutationOptions?: UseMutationOptions<
    { message: string },
    TuskyErrorResponse,
    { taskId: string },
    { previousTasks: Task[] | undefined }
  >
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId }) => deleteTask(taskId),

    onMutate: async ({ taskId }) => {
      await queryClient.cancelQueries({ queryKey: [TASKS_QUERY_KEY.LIST] });

      const previousTasks = queryClient.getQueryData<Task[]>([
        TASKS_QUERY_KEY.LIST,
      ]);

      queryClient.setQueryData<Task[]>([TASKS_QUERY_KEY.LIST], (old = []) =>
        old.filter((task) => task.id !== taskId)
      );

      return { previousTasks };
    },

    onError: (_err, _vars, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData([TASKS_QUERY_KEY.LIST], context.previousTasks);
      }
      toast.error("Failed to delete task.");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TASKS_QUERY_KEY.LIST] });
    },

    ...mutationOptions,
  });
};
