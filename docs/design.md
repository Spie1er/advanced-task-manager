# 📐 Design Document — Advanced Task Manager

## 1. Overview

The **Advanced Task Manager** is a web application for managing tasks with CRUD functionality, built using **React + Vite + TypeScript**. It integrates **React Query** for server state management and **JSON Server** for simulating a REST API backend.

The application emphasizes:

- Optimistic UI updates
- Form validation with **Zod**
- Responsive UI with **Tailwind CSS**
- Clean separation of concerns (API, components, queries, pages)

---

## 2. Goals

- Provide a **responsive task board** with create, update, delete, search, filter, and sort features.
- Maintain **separation of business logic and presentation**.
- Ensure **scalability** (easy to replace JSON server with real backend).
- Prioritize **developer experience** with TypeScript, linting, and Prettier.

---

## 3. Architecture

### Frontend

- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form + Zod
- **State**: React Query for server state, `useState` for local UI state

### Data Flow

1. Components use **React Query hooks** (`useGetAllTasks`, `useAddTaskMutation`, etc.).
2. API layer (`src/api`) abstracts axios requests.
3. JSON Server provides REST endpoints (`db.json` as database).

---

## 4. UI Design

- **Header**: Logo, "Add Task" button.
- **Task Board**: Grid of task cards.
- **Task Card**: Title, description, priority, created date, completion status, action buttons.
- **Filters/Search/Sort**: Controls above the board.
- **Modal**: Add/Update task with validated form.

### Responsiveness

- Search occupies full width on small screens.
- Filters & Sort stack below Search.
- Task cards adapt to 1/2/3-column layout based on viewport size.

---

## 5. Data Model

```ts
type Task = {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
  createdAt: string;
};
```

---

## 6. Future Enhancements

- Authentication & user-specific tasks.
- separate the task board by flow stages (backlog, todo, in progress, code rewiew, testing, ready for acceptance...)
- Drag-and-drop functionality to move tasks to the stages boards.
- Real backend server or serverless (Next.JS).
- Notifications / Reminders.
- Multi language support.
- Dark/Light themes.
- SaaS pricing & multi-tenant support.
