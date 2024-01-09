// app.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors = require('cors');
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error.js");

//import routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const jobTypeRoutes = require("./routes/jobTypesRoutes");
const jobRoutes = require("./routes/jobsRoutes");

//databse connection
const dbconnectionstring = process.env.DB_CONNECTION_STRING;

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
    try {
        await mongoose.connect(dbconnectionstring);
        console.log("MongoDB is Connected!!");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

//Middle ware
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));

//Routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', jobTypeRoutes);
app.use('/api', jobRoutes);




//error middleware
app.use(errorHandler);


// port
const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});

connectDB();
