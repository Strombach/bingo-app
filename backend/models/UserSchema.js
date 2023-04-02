const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		trim: true,
		collation: {
			locale: 'sv',
			strength: 2,
		},
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
