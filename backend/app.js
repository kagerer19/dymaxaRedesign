require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const jobRoute = require("./routes/jobsRoutes");

const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

// Database connection
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

// Middleware
app.use(morgan("combined"));
app.use(bodyParser.json({ limit: "15mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "15mb",
        extended: true,
    })
);
app.use(cookieParser());
app.use(express.json());


// Apply CORS middleware globally
app.use(
    cors({
        origin: process.env.CORS_ALLOWED_ORIGINS || "https://dymaxa-redesign-frontend.vercel.app/", // Allow requests from specified origins
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// Routes
app.use("/api", jobRoute);
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// Error middleware
app.use(errorHandler);

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

connectDB();
