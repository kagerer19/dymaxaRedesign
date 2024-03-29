const express = require("express");
const router = express.Router();
const {isAdmin, isAuthenticated} = require("../middleware/auth");
const {createJob, singleJob, updateJob, showJobs, deleteJob} = require("../controllers/jobsController");
const cors = require("cors");

//Jobs routes
// /api/job/create
router.post('/job/create', createJob);

// /api/job/id
router.get('/job/:id', singleJob);

// /api/job/update/:job_id
router.put('/job/update/:job_id', updateJob);

// /api/job/update/:job_id
router.delete('/job/delete/:job_id', deleteJob);

// /api/jobs/show
router.get('/jobs/show', showJobs);

module.exports = router;
