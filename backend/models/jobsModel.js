const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        maxlength: 70,
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
    },
    requirements: {
        type: [String],
        trim: true,
        required: true,
    },
    behaviouralCompetency: {
        type: [String],
        trim: true,
    },
    duties: {
        type: [String],
        trim: true,
        required: true,
    },
    salary: {
        type: Number,
        trim: true,
        required: [true, 'Salary is required'],
    },
    location: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true,
    },
    employmentType: {
        type: String,
        ref: 'employmentType',
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('Job', jobSchema);
