// logModel.js
const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now },
    message: { type: String, required: true },
    additionalInfo: {
        error: { type: Object, default: null },
        request: {
            user: String,
            rawHeaders: [String],
            headers: Object,
            body: Object,
            params: Object,
            query: Object,
        },
    },
    type: { type: String, enum: ['info', 'error'], default: 'info' },
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
