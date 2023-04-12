const valuesController = {};

const Values = require('../models/ValuesSchema');

// Get all the values.
valuesController.index = async (req, res) => {
	try {
		const values = await Values.find({});

		res.json(values[0]);
	} catch (error) {
		res.status(400).json(error);
	}
};

// Create new values.
valuesController.createValues = async (req, res) => {
	try {
		const newValues = new Values({
			colVal: [200, 200, 200, 500, 400],
			rowVal: [300, 500, 200, 100, 100],
		});

		await newValues.save();

		res.json(newValues);
	} catch (error) {
		res.status(404).json(error);
	}
};

valuesController.updateValues = async (req, res) => {
	try {
		const valuesToUpdate = await Values.findByIdAndUpdate(
			{
				_id: req.body._id,
			},
			req.body.updatedValues
		);

		res.json(req.body.updatedValues);
	} catch (error) {
		console.log(error);
		res.status(404).json(error);
	}
};

module.exports = valuesController;
