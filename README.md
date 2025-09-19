# Advanced Task Manager

This project is a full-featured "Advanced Task Manager" web application that allows users to perform **complete CRUD** (Create, Read, Update, Delete) operations on a list of tasks, backed by a mock API.

Project is done for the Front-End Developer Assignment given by `TNET`.

---

## 🚀 Features

- **Display Tasks (Read):** Fetches and displays all tasks from a mock API in a primary view. Each task must include the title, a description (ellipsed to prevent overflow), a visual indicator for completion status, priority, and the formatted creation date.
- **Write Operations (Create, Update, Delete):**
  - **Create:** A modal form is used to add new tasks. The form includes fields for title, description, and priority. The priority field is a custom dropdown component, not a default HTML `<select>` element.
  - **Update:** Users can edit a task's title, description, and priority, potentially using the same modal component as for creation. A mechanism is provided to toggle a task's completed status directly from the main list view.
  - **Delete:** Each task has a button or icon to trigger its deletion, with a recommended confirmation step.
- **Optimistic UI with React Query:** All write operations (Create, Update, Delete) must implement optimistic updates. The UI should update instantly, and in case of an API error, it must roll back to its previous state and notify the user.
- **Search & Filtering:**
  - **Search:** A text input field filters tasks by title or description in real-time.
  - **Filter:** A dropdown menu allows filtering by completion status: "All," "Completed," and "Pending".
- **Sorting:** Functionality is implemented to sort the task list by the `createdAt` date.
- **Form Validation:** Client-side validation using **Zod** and **React Hook Form** ensures the following rules are met for the creation/editing form:
  - `title`: Required, with a minimum length of 3 characters.
  - `description`: Required, with a minimum length of 10 characters.
  - `priority`: Required; a user must select an option.
  - Clear error messages are displayed next to the relevant fields upon validation failure.

---

## 🛠️ Technical Stack

This project was built using the following technologies:

- **UI Framework:** React
- **HTTP Client:** Axios
- **Schema & Validation:** Zod
- **Form Management:** React Hook Form
- **Server State Management:** React Query
- **Styling:** Tailwind CSS
- **Date/Time Utility:** Day.js

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Spie1er/advanced-task-manager.git
    cd advanced-task-manager
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

### Running the Development Server

1.  **Start the front-end application:**

In a terminal window, run:

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

    The application will be available at `http://localhost:5173`.

2.  **Start the JSON Server:**

In a terminal window, run:

    ```bash
    npm run server
    ```

    or

    ```bash
    yarn server
    ```

    The server will be available at `http://localhost:3000`.

---

## 📂 Project Structure

<!-- TODO - TECHEDBT - ADD PROJECT STRUCTURE - @KOTE -->
