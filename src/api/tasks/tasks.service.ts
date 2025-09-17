import { TaskListResponse } from "./tasks.types";

export const mapTaskList = (taskList: TaskListResponse) => {
  return taskList.map((task) => {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
      priority: task.priority,
      createdAt: task.createdAt,
    };
  });
};
