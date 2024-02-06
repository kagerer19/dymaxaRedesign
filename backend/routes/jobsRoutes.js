const express = require("express");
const router = express.Router();
const { isAdmin, isAuthenticated } = require("../middleware/auth");
const { createJob, singleJob, updateJob, showJobs, deleteJob } = require("../controllers/jobsController");

// Jobs routes
// /api/job/create
router.post('/create', createJob);

// /api/job/:id
router.get('/:id', singleJob);

// /api/job/update/:job_id
router.put('/update/:job_id', updateJob);

// /api/job/delete/:job_id
router.delete('/delete/:job_id', deleteJob);

// /api/jobs/show
router.get('/show', showJobs);

module.exports = router;
