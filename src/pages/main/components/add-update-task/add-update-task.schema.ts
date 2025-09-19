import { Priority } from "@/api/tasks";
import z from "zod";

export const taskFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  completed: z.boolean(),
  priority: z.enum(Priority),
  id: z.string().nullable(),
  createdAt: z.string().nullable(),
});
