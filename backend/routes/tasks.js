const express = require('express');
const router = express.Router();
const tasks = require('../data');

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// GET a specific task by ID
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  res.json(task);
});

// POST a new task
router.post('/', (req, res) => {
  const newTask = { id: tasks.length + 1, title: req.body.title };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update a task
router.put('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    task.title = req.body.title;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// DELETE a task
router.delete('/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index !== -1) {
    tasks.splice(index, 1);
    res.json({ message: 'Task deleted successfully' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

module.exports = router;
