import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks and completed tasks from the backend when the component mounts
    // Assume backend API endpoints '/api/tasks' and '/api/completed-tasks'
    fetch('/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));

    fetch('/api/completed-tasks')
      .then(response => response.json())
      .then(data => setCompletedTasks(data))
      .catch(error => console.error('Error fetching completed tasks:', error));
  }, []);

  const addTask = newTask => {
    // For simplicity, add a task locally without making a backend request
    setTasks([...tasks, { _id: tasks.length + 1, ...newTask }]);
  };

  const editTask = (taskId, updatedTask) => {
    // For simplicity, update a task locally without making a backend request
    setTasks(tasks.map(task => (task._id === taskId ? { ...task, ...updatedTask } : task)));
  };

  const deleteTask = taskId => {
    // For simplicity, delete a task locally without making a backend request
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  const completeTask = taskId => {
    // For simplicity, move a task to completed tasks locally without making a backend request
    const taskToComplete = tasks.find(task => task._id === taskId);
    setCompletedTasks([...completedTasks, { ...taskToComplete }]);
    deleteTask(taskId);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskList
        tasks={tasks}
        onEdit={editTask}
        onDelete={deleteTask}
        onComplete={completeTask}
      />
      <TaskForm addTask={addTask} />
      <h2>Completed Tasks</h2>
      <TaskList tasks={completedTasks} />
    </div>
  );
};

export default App;
