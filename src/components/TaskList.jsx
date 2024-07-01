import React, { useState } from 'react';
import TaskItem from './TaskItem';
import EditTaskForm from './EditTaskForm';

const TaskList = ({ tasks, onUpdateStatus, onDeleteTask, onUpdateTask }) => {
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const handleCancelEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div>
      {taskToEdit ? (
        <EditTaskForm
          taskToEdit={taskToEdit}
          onUpdateTask={(updatedTask) => {
            onUpdateTask(updatedTask);
            setTaskToEdit(null);
          }}
          onCancelEdit={handleCancelEdit}
        />
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdateStatus={onUpdateStatus}
            onDeleteTask={onDeleteTask}
            onEditTask={handleEditTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;