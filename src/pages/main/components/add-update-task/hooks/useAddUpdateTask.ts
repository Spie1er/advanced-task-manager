import { TaskFormValues } from "../add-update-task.types";

export const useAddUpdateTask = () => {
  const onSubmit = (val: TaskFormValues) => {
    console.log(val);
  };

  return {
    onSubmit,
  };
};
