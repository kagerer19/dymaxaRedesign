// db.js
const mongoose = require("mongoose");
require('dotenv').config();
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
module.exports = connectDB;
