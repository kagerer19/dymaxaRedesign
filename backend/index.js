require("dotenv").config();
const express = require("express");
const index = express();
const cors = require('cors');
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobRoute = require('./routes/jobsRoutes');

const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");

index.use("/", (req, res) => {
    res.send({ message: 'Backend is working fine!' });
});

index.listen(4000, console.log("Server on port 4000"));

// Apply CORS middleware globally
index.use(cors({
    origin: ["https://dymaxa-redesign-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Apply routes
index.use('/api', jobRoute);
index.use('/api', authRoutes);
index.use('/api', userRoutes);

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
//MIDDLEWARE

index.use(morgan('combined'));
index.use(bodyParser.json({ limit: "15mb" }));
index.use(bodyParser.urlencoded({
    limit: "15mb",
    extended: true
}));
index.use(cookieParser());
index.use(express.json());


// error middleware
index.use(errorHandler);


connectDB();
