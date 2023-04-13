const rulesController = {};

const Rules = require('../models/RulesSchema');

// Get all the values.
rulesController.index = async (req, res) => {
	try {
		const rules = await Rules.find({});

		res.json(rules[0]);
	} catch (error) {
		res.status(400).json(error);
	}
};

// Create new values.
rulesController.createRules = async (req, res) => {
	try {
		const newRules = new Rules({
			rules: 'Test rules',
		});

		await newRules.save();

		res.json(newRules);
	} catch (error) {
		res.status(404).json(error);
	}
};

module.exports = rulesController;
