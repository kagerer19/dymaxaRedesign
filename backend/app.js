require("dotenv").config();
const express = require("express");
const app = express();
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

//database connection
const dbConnectionString = process.env.DB_CONNECTION_STRING;

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
    try {
        await mongoose.connect(dbConnectionString);
        console.log("MongoDB is Connected!!");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

//MIDDLEWARE
app.use(morgan('combined'));
app.use(bodyParser.json({ limit: "15mb" }));
app.use(bodyParser.urlencoded({
    limit: "15mb",
    extended: true
}));

app.use(cookieParser());
app.use(cors(
    {
        origin: ["https://dymaxa-redesign-9mlp.vercel.app/"],
        methods: ["*"],
        credentials: true
    }
));

app.use('/api', jobRoute);
app.use('/api', authRoutes);
app.use('/api', userRoutes);

// error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

connectDB().then();
