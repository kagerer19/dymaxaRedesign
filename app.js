// app.js
const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/api/books');
const cores = require('cors');
const bodyParser = require('body-parser');

const app = express();

//Use cors middleware with the origin credentials options
app.use(cores({ origin:true, credentials: true}));

//Use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Use the routes module as a middleware for the api/books path
app.use("/api/books", routes);

// Connect Database
connectDB();
app.get('/', (req, res) => res.send('Hello Alexander!'));

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));