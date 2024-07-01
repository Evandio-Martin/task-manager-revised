import React, { useState } from 'react';

const EditTaskForm = ({ taskToEdit, onUpdateTask, onCancelEdit }) => {
  const [title, setTitle] = useState(taskToEdit.title);
  const [description, setDescription] = useState(taskToEdit.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onUpdateTask({ ...taskToEdit, title, description });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Update Task</button>
      <button type="button" className="form-cancel-button" onClick={onCancelEdit}>Cancel</button>
    </form>
  );
};

export default EditTaskForm;