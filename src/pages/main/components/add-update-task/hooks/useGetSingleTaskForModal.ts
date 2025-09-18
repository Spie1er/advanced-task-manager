import { mapSingleTask } from "@/api/tasks";
import { useGetSingleTask } from "@/query-client/queries/tasks";

export const useGetSingleTaskForModal = ({ taskId }: { taskId?: string }) => {
  const { data: singleTaskData, isFetching: isTaskFetching } = useGetSingleTask(
    {
      taskId,
      queryOptions: {
        select: mapSingleTask,
        enabled: !!taskId,
      },
    }
  );

  return { singleTaskData, isTaskFetching };
};
