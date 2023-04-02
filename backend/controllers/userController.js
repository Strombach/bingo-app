const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const userController = {};

/**
 * The function that registers and saves a new user to the DB
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next middleware function.
 */
userController.userRegister = async (req, res, next) => {
	try {
		const newUser = new User({
			username: req.body.username,
			password: req.body.password,
		});

		await newUser.save();

		res.status(200).json({
			message: 'Successfully created new user',
			username: newUser.username,
		});
	} catch (error) {
		res.status(401).json({
			error,
		});
	}
};

module.exports = userController;
