const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const userController = {};

/**
 * The function that checks if a username could be found in
 * the DB and then compares password.
 * If successful a JWT is sent to the client.
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next middleware function.
 */
userController.userLogin = async (req, res, next) => {
	try {
		if (!req.body.username || !req.body.password) {
			throw new Error('Username or password is wrong');
		}

		const loginUser = await User.findOne({
			username: req.body.username.toLowerCase(),
		});

		if (!loginUser) {
			throw new Error('Username or password is wrong');
		}

		if (loginUser.password === req.body.password) {
			const authData = {
				message: 'success',
				loggedIn: true,
				username: loginUser.username,
				userType: loginUser.type,
			};

			jwt.sign(
				{ authData },
				process.env.JWT_SECRET,
				{
					expiresIn: '2 days',
				},
				(err, token) => {
					if (err) console.log(err);

					res.status(200).json({
						loginStatus: true,
						userType: loginUser.type,
						JWT: token,
					});
				}
			);
		} else {
			throw new Error('Username or password is wrong');
		}
	} catch (error) {
		res.status(401).json({
			message: 'No luck',
			error: error.message,
		});
	}
};

/**
 * The function that registers and saves a new user to the DB
 * @param {*} req The request object.
 * @param {*} res The response object.
 * @param {*} next The next middleware function.
 */
userController.userRegister = async (req, res, next) => {
	try {
		const newUser = new User({
			username: req.body.username.toLowerCase(),
			password: req.body.password,
			type: req.body.type,
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
