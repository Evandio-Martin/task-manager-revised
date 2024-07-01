import React from 'react';

const TaskItem = ({ task, onUpdateStatus, onDeleteTask, onEditTask }) => {
  return (
    <div className="task-item">
      <div className="task-left">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onUpdateStatus(task.id)}
      />
      <div className="task-details">
        <h3>{task.title}</h3>
        <p className="task-description">{task.description}</p>
        </div>
      </div>
      <div className="task-buttons">
      <button onClick={() => onEditTask(task)}>Edit</button>
      <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;