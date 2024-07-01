# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Task Manager Application

This is a simple Task Manager application built using React and Vite. It allows users to manage their tasks by adding, editing, deleting, and filtering tasks. The application also saves tasks to local storage, ensuring that tasks persist across page reloads.

## Features

1. **Task List View**: Display a list of tasks. Each task has a title, description, and status (completed or not).
2. **Add Task**: A form to add a new task with a title and description. The new task is added to the task list.
3. **Update Task Status**: A way to mark a task as completed or not completed (e.g., a checkbox).
4. **Delete Task**: A way to remove a task from the list.
5. **Filter Tasks**: A way to filter tasks by their status (e.g., show all, show completed, show active).
6. **Edit Task**: Ability to edit the title and description of an existing task.
7. **Local Storage**: Persist tasks in local storage so that they are not lost on page reload.
8. **Styling**: Basic but clean and responsive styling using CSS.
9. **Code Quality**: Clean and readable code using functional components and hooks.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Getting Started

1. **Clone the Repository**:

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

2. **Install Dependencies**:

```bash
npm install
```

3. **Run the Development Server**:

```bash
npm run dev
```

4. **Open the Application**:

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the Task Manager application running.

### Deployment

To build the project for production, run:

```bash
npm run build
```
