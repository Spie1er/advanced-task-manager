import {
  transformTaskFormValuesToCreatePayload,
  transformTaskFormValuesToUpdatePayload,
} from "@/pages/main/utils";
import { TaskFormValues } from "../add-update-task.types";
import {
  useAddParcelMutation,
  useUpdateTaskMutation,
} from "@/query-client/mutations/tasks";
import { toast } from "react-toastify";

export const useAddUpdateTask = ({ onClose }: { onClose: () => void }) => {
  const { mutate: createTask, isPending: taskIsCreating } =
    useAddParcelMutation();

  const { mutate: updateTask, isPending: taskIsUpdating } =
    useUpdateTaskMutation();

  const onSubmit = (val: TaskFormValues) => {
    if (val.id) {
      const payload = transformTaskFormValuesToUpdatePayload(val);
      updateTask(
        { taskId: val.id, payload },
        {
          onSuccess: () => {
            toast.success("Task Successfully Created");
            onClose();
          },
        }
      );
    } else {
      const payload = transformTaskFormValuesToCreatePayload(val);
      createTask(
        { payload },
        {
          onSuccess: () => {
            toast.success("Task Successfully Created");
            onClose();
          },
        }
      );
    }
  };

  return {
    onSubmit,
    taskIsCreating,
    taskIsUpdating,
  };
};
