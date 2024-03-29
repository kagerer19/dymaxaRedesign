require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobRoute = require('./routes/jobsRoutes');

const cookieParser = require("cookie-parser");

// Cors Options
const corsOptions = {
    origin: 'https://dymaxa-redesign-frontend.vercel.app',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: "15mb" }));
app.use(bodyParser.urlencoded({
    limit: "15mb",
    extended: true
}));
app.use(cookieParser());

// Apply routes
app.use('/api', jobRoute);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

//database connection
const dbConnectionString = process.env.DB_CONNECTION_STRING;

mongoose.set("strictQuery", true, "useNewUrlParser", true);
const connectDB = async () => {
    try {
        await mongoose.connect(dbConnectionString);
        console.log("MongoDB is Connected!");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};


connectDB().then();

/*
For DEV
 */
//port
//const port = process.env.PORT || 8000

//app.listen(port, () => {
 //   console.log(`Server running on port ${port}`);
//});

module.exports = app;
