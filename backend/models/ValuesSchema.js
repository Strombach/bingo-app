const mongoose = require('mongoose');

const ValuesSchema = new mongoose.Schema({
	colVal: {
		type: Array,
		required: true,
	},
	rowVal: {
		type: Array,
		required: true,
	},
});

const Values = mongoose.model('Values', ValuesSchema);

module.exports = Values;
