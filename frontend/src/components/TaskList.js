import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <span>{task.title}</span>
            <div className='functionList'>
              <button onClick={() => onEdit(task._id, { title: prompt('Edit task:', task.title) })}>
                Edit
              </button>
              <button onClick={() => onDelete(task._id)}>Delete</button>
              <button onClick={() => onComplete(task._id)}>Completed</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
