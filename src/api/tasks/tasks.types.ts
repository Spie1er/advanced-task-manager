export type Task = {
  id: number;
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
