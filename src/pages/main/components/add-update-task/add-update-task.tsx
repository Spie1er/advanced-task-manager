import { Modal } from "@/components/common/modal";
import {
  AddUpdateTaskModalProps,
  TaskFormValues,
} from "./add-update-task.types";
import { useGetSingleTaskForModal } from "./hooks/useGetSingleTaskForModal";
import { Controller, useForm } from "react-hook-form";
import { Priority } from "@/api/tasks";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskFormSchema } from "./add-update-task.schema";
import { Button } from "@/components/common/button";
import { InputField } from "@/components/common/input";
import { TextAreaField } from "@/components/common/textarea";
import { StatusChanger } from "./task-status-changer";
import { PriorityChanger } from "./task-priority-changer";
import { useAddUpdateTask } from "./hooks/useAddUpdateTask";
import { useEffect } from "react";
import dayjs from "dayjs";

const AddUpdateTaskModal: React.FC<AddUpdateTaskModalProps> = ({
  isOpen,
  taskId,
  onClose,
}) => {
  const { singleTaskData, isTaskFetching } = useGetSingleTaskForModal({
    taskId,
  });

  const initialTaskFormValues: TaskFormValues = {
    id: null,
    title: "",
    description: "",
    completed: false,
    priority: Priority.LOW,
    createdAt: null,
  };

  const { control, handleSubmit, reset } = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: initialTaskFormValues,
    mode: "onBlur",
  });

  if (isTaskFetching) {
    console.log("loaaading");
  }

  useEffect(() => {
    if (singleTaskData) {
      reset(singleTaskData);
    }
  }, [singleTaskData, reset]);

  const { onSubmit } = useAddUpdateTask();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={taskId ? "Edit Task..." : "Add New Task..."}
      body={
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6"
        >
          {singleTaskData?.createdAt && (
            <span className="bg-tusky-peach/20 text-tusky-peach self-start rounded-md px-2 py-1 text-sm font-medium">
              Created: {dayjs(singleTaskData.createdAt).format("MMM D, YYYY")}
            </span>
          )}

          {/* Title */}
          <Controller
            name="title"
            control={control}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error, invalid },
            }) => (
              <div className="flex flex-col">
                <InputField
                  required
                  label="Title"
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={invalid}
                  errorText={error?.message}
                />
              </div>
            )}
          />

          {/* Description */}
          <Controller
            name="description"
            control={control}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error, invalid },
            }) => (
              <div className="flex flex-col">
                <TextAreaField
                  required
                  rows={5}
                  label="Description"
                  value={value || ""}
                  onChange={onChange}
                  onBlur={onBlur}
                  isError={invalid}
                  errorText={error?.message}
                />
              </div>
            )}
          />

          <div className="flex justify-center gap-4">
            <Controller
              name="completed"
              control={control}
              render={({ field: { onChange, value } }) => (
                <StatusChanger completed={value} onChange={onChange} />
              )}
            />

            <Controller
              name="priority"
              control={control}
              render={({ field: { onChange, value } }) => (
                <PriorityChanger taskPriority={value} onChange={onChange} />
              )}
            />
          </div>

          {/* Submit Button - TODO - NEEDS LOADING UPDATE - @KOTE */}
          <Button
            type="primary"
            text="Save Task"
            buttonType="submit"
            onClick={handleSubmit(onSubmit)}
          />
        </form>
      }
    />
  );
};
export default AddUpdateTaskModal;
