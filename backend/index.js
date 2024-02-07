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
const errorHandler = require("./middleware/error");

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

// Error middleware
app.use(errorHandler);

// Database connection
const dbConnectionString = "mongodb+srv://dymaxaDB:nprraRQoZnVKde9j@dymaxarec.rvvspyb.mongodb.net/test?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
const connectDB = async () => {
    try {
        await mongoose.connect(dbConnectionString);
        console.log("MongoDB connected!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};


connectDB().then();

module.exports = app;
