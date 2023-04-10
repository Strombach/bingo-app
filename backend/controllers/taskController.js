const io = require('socket.io');
const taskController = {};

const Task = require('../models/TaskSchema');

// Get all the tasks.
taskController.index = async (req, res) => {
	try {
		const tasks = await Task.find({});

		res.json(tasks);
	} catch (error) {
		res.status(400).json(error);
	}
};

// Get a single task.
taskController.getTask = async (req, res) => {
	try {
		const singleTask = await Task.findOne({ _id: req.params.taskId });

		res.json(singleTask);
	} catch (error) {
		res.status(400).json(error);
	}
};

// Create a new task.
taskController.postTask = async (req, res) => {
	try {
		const newTask = new Task({
			task: 'Testeli test test',
			lifeline: false,
			isDone: false,
			value: 200,
		});

		await newTask.save();

		res.json(newTask);
	} catch (error) {
		res.status(404).json(error);
	}
};

// Update a task.
taskController.updateTask = async (req, res) => {
	try {
		const taskToUpdate = await Task.findByIdAndUpdate(
			{
				_id: req.params.taskId,
			},
			req.body.updatedTask
		);

		req.io.emit('test', 'Hello');
		res.json(req.body.updatedTask);
	} catch (error) {
		console.log(error);
		res.status(404).json(error);
	}
};

// Delete the task which id matches the id sent in body.
taskController.deleteTask = async (req, res) => {
	try {
		const taskToDelete = await Task.findByIdAndDelete({
			_id: req.body.taskId,
		});

		res.status(200).json({
			message: `"${taskToDelete.task}" is deleted.`,
		});
	} catch (error) {
		res.status(404).json(error);
	}
};

module.exports = taskController;
