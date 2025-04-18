// const Task = require('../models/Task');

// exports.getTasks = async (req, res) => {
//   const tasks = await Task.find({ userId: req.user.id });
//   res.json(tasks);
// };

// exports.createTask = async (req, res) => {
//   const { title, description, deadline, priority } = req.body;

//   const newTask = new Task({
//     userId: req.user.id,
//     title,
//     description,
//     deadline,
//     priority,
//   });

//   await newTask.save();
//   res.json(newTask);
// };

// exports.updateTask = async (req, res) => {
//   const task = await Task.findById(req.params.id);
//   if (task.userId.toString() !== req.user.id) {
//     return res.status(401).json({ msg: 'Not authorized' });
//   }

//   Object.assign(task, req.body);
//   await task.save();
//   res.json(task);
// };

// exports.deleteTask = async (req, res) => {
//   const task = await Task.findById(req.params.id);
//   if (task.userId.toString() !== req.user.id) {
//     return res.status(401).json({ msg: 'Not authorized' });
//   }

//   await task.remove();
//   res.json({ msg: 'Task deleted' });
// };



const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    // Find tasks belonging to the logged-in user
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Failed to fetch tasks' });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description, deadline, priority } = req.body;

    const newTask = new Task({
      userId: req.user.id, // Ensure this is correctly set
      title,
      description,
      deadline,
      priority,
    });
    
   
    // Save the new task to the database
    await newTask.save();
    res.status(201).json(newTask); // Respond with the newly created task
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Failed to create task' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    // Find the task by its ID
    const task = await Task.findById(req.params.id);

    // Check if task exists and belongs to the logged-in user
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    // Ensure that the task belongs to the logged-in user
    if (task.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Update the task with the new data
    Object.assign(task, req.body);
    await task.save();
    res.json(task);  // Respond with the updated task
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Failed to update task' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    // Find the task by its ID
    const task = await Task.findById(req.params.id);

    // Check if task exists and belongs to the logged-in user
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    // Ensure that the task belongs to the logged-in user
    if (task.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Remove the task from the database
    await task.remove();
    res.json({ msg: 'Task deleted' });  // Respond with success message
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Failed to delete task' });
  }
};
