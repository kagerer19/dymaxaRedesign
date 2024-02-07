const express = require("express");
const router = express.Router();
const { isAdmin, isAuthenticated } = require("../middleware/auth");
const { createJob, singleJob, updateJob, showJobs, deleteJob } = require("../controllers/jobsController");

// Jobs routes
router.post('/job/create', createJob);
router.get('/job/:id', singleJob);
router.put('/job/update/:job_id', updateJob);
router.delete('/job/delete/:job_id', deleteJob);

// Custom route for showing jobs
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
