require("dotenv").config();
const winston = require('winston');
require('winston-mongodb');
const mongoose = require('mongoose');
const Log = require('../models/loggerModel');

const dbConnectionString = process.env.DB_LOGGER_STRING;

mongoose.connect(dbConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');

    let options = {
        db: db.useDb('dymaxalogs'),
        options: {useUnifiedTopology: true},
        collection: 'logs',
        capped: false,
        expireAfterSeconds: 2592000,
        leaveConnectionOpen: false,
        storeHost: false,
        metaKey: 'additionalInfo',
    };

    const log = winston.createLogger({
        transports: [
            new winston.transports.MongoDB(options),
        ],
    });
});

async function logger({messageString = '', additionalInfo = {error: null, request: null}, type = 'error'}) {
    try {
        const logEntry = new Log({
            message: messageString,
            additionalInfo: {
                error: additionalInfo?.error,
                request: additionalInfo?.request,
            },
            type,
        });
        await logEntry.save();
    } catch (err) {
        // Handle errors
        console.error('Error saving log entry:', err);
    }
}

module.exports = logger;
