const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = 4000;

connectDatabase(process.env.MONGO_USERNAME, process.env.MONGO_PASSWORD).catch(
	(err) => console.log(err)
);

// Additional middleware
app.use(express.json());

app.use('/tasks', require('./routes/taskRoute'));

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
	console.log(url);
	await mongoose.connect(url);
}
