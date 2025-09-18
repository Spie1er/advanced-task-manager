import { Task, TaskListResponse } from "./tasks.types";

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

export const mapSingleTask = (task: Task) => {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    completed: task.completed,
    priority: task.priority,
    createdAt: task.createdAt,
  };
};
