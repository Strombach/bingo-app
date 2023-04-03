module.exports = (req, res, next) => {
	try {
		if (req.userData.authData.userType === 'svenne') {
			throw new Error('Forbidden');
		}

		next();
	} catch (error) {
		return res.status(403).json({
			message: 'Forbidden',
		});
	}
};
