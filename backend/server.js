const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();

const port = 4000;

app.use(
	morgan('dev', {
		skip: function (req, res) {
			return res.statusCode < 400;
		},
	})
);

app.use(
	morgan('common', {
		stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
			flags: 'a',
		}),
	})
);

connectDatabase(process.env.MONGO_USERNAME, process.env.MONGO_PASSWORD).catch(
	(err) => console.log(err)
);

// Additional middleware
app.use(cors());
app.use(express.json());

app.use('/api/tasks', require('./routes/taskRoute'));
app.use('/api/user', require('./routes/userRoute'));

// Catch 404
app.use((req, res) => {
	res.status(404).json('Not Found');
});

// Error handler
app.use((err, req, res) => {
	res.status(err.status || 500);
	res.send(err.message || 'Internal Server Error');
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});

async function connectDatabase(username, password) {
	const url = `mongodb+srv://${username}:${password}@davidssvensexa.hhcgx1k.mongodb.net/?retryWrites=true&w=majority`;
	await mongoose.connect(url);
}
