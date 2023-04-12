const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	task: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: false,
		trim: true,
	},
	value: {
		type: Number,
		required: true,
	},
	isDone: {
		type: Boolean,
		required: true,
	},
	lifeline: {
		type: Boolean,
		required: true,
	},
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
