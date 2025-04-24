const Task = require('../models/Task');
const express = require('express');
const router = express.Router();

// In-memory task list
let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build an API", completed: false }
];

// GET /api/tasks - Fetch all tasks from MongoDB
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// POST /api/tasks - Create a new task in MongoDB
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title });
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create task' });
  }
});

// PUT /api/tasks/:id - Update a task
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update task' });
  }
});

// DELETE /api/tasks/:id - Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted', task: deletedTask });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});
    
module.exports = router;
