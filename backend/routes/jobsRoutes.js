const express = require("express");
const router = express.Router();
const { isAdmin, isAuthenticated } = require("../middleware/auth");
const { createJob, singleJob, updateJob, showJobs, deleteJob } = require("../controllers/jobsController");

// Jobs routes
// /apis/job/create
router.post('/job/create', createJob);

// /apis/job/id
router.get('/job/:id', singleJob);

// /apis/job/update/:job_id
router.put('/job/update/:job_id', updateJob);

// /apis/job/update/:job_id
router.delete('/job/delete/:job_id', deleteJob);

// Define the new route handler for /apis/jobs/show
router.get('/jobs/show', async (req, res) => {
    try {
        const { pageNumber, keyword, cat, location } = req.query;
        const jobs = []; // Fetch jobs from database
        res.status(200).json({ success: true, jobs });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

module.exports = router;
