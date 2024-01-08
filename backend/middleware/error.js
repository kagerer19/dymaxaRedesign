const ErrorResponse = require("../utils/errorResponse.js");

const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;

    if(err.name === "CastError") {
        const message = `Resource not found ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    //Mongoose duplicate Value
    if(err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400); // 400 = Not authorized
    }

    //Mongoose validation error
    if(err.name === "ValidationError") {
        const message = Object.values(err.errors).map(val => ' ' + val.message);
        error = new ErrorResponse(message, 400); // 400 = Not authorized
    }

    res.status(error.codeStatus || 500).json({
        success: false,
        error: error.message || "server error"
    });
}

module.exports = errorHandler;