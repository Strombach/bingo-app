module.exports = (req, res, next) => {
	try {
		if (req.userData.authData.userType === 'admin') {
			next();
		} else {
			throw new Error('Forbidden');
		}
	} catch (error) {
		return res.status(403).json({
			message: 'Forbidden',
		});
	}
};
