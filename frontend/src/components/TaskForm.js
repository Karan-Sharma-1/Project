import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTask({ title });
    setTitle('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
