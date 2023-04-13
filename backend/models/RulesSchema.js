const mongoose = require('mongoose');

const RulesSchema = new mongoose.Schema({
	rules: {
		type: String,
	},
});

const Rules = mongoose.model('Rules', RulesSchema);

module.exports = Rules;
