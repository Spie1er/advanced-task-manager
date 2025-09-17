export const TASKS_ENDPOINTS = {
  LIST: "/tasks",
  SINGLE: (taskId: number | string) => `/tasks/${taskId}`,
};
