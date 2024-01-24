const Job = require('../models/jobsModel');
const ErrorResponse = require('../utils/errorResponse');

//create job
exports.createJob = async (req, res, next) => {
    try {
        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            employmentType: req.body.employmentType,
            requirements: req.body.requirements,
            behaviouralCompetency: req.body.behaviouralCompetency,
            duties: req.body.duties,
        });

        res.status(201).json({
            success: true,
            job
        });
    } catch (error) {
        next(error);
    }
};



//show single job
exports.singleJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}


// Update job by id.
exports.updateJob = async (req, res, next) => {
    try {
        const jobId = req.params.job_id;

        // Check if the job with the given ID exists
        const existingJob = await Job.findById(jobId);
        if (!existingJob) {
            return res.status(404).json({
                success: false,
                error: 'Job not found',
            });
        }

        // Update the job
        const updatedJob = await Job.findByIdAndUpdate(jobId, req.body, { new: true });

        // Check if the update was successful
        if (!updatedJob) {
            return res.status(500).json({
                success: false,
                error: 'Error updating job',
            });
        }

        // Send the updated job as a response
        res.status(200).json({
            success: true,
            job: updatedJob,
        });
    } catch (error) {
        // Handle other errors
        next(error);
    }
};


// delete job
exports.deleteJob = async (req, res, next) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.job_id);
        res.status(200).json({
            success: true,
            message: "job deleted."
        })
    } catch (error) {
        next(error);
    }
}


//Show jobs
exports.showJobs = async (req, res, next) => {

    //enable search
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    //jobs by location
    let locations = [];
    const jobByLocation = await Job.find({}, { location: 1 });
    jobByLocation.forEach(val => {
        locations.push(val.location);
    });
    let setUniqueLocation = [...new Set(locations)];
    let location = req.query.location;
    let locationFilter = location !== '' ? location : setUniqueLocation;


    //enable pagination
    const pageSize = 4;
    const page = Number(req.query.pageNumber) || 1;
    //const count = await Job.find({}).estimatedDocumentCount();
    const count = await Job.find({ ...keyword, location: locationFilter }).countDocuments();

    try {
        const jobs = await Job.find({ ...keyword, location: locationFilter }).sort({ createdAt: -1 }).skip(pageSize * (page - 1)).limit(pageSize)
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
            setUniqueLocation

        })
    } catch (error) {
        next(error);
    }
}