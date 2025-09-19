export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  createdAt: string;
};

export enum Priority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

export type TaskListResponse = Task[];

export type CreateTaskPayload = {
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  createdAt: string;
};

export type UpdateTaskPayload = {
  id?: string;
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: Priority;
  createdAt?: string;
};
