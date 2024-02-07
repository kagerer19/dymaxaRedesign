const express = require("express");
const router = express.Router();
const {isAdmin, isAuthenticated} = require("../middleware/auth");
const {createJob, singleJob, updateJob, showJobs, deleteJob} = require("../controllers/jobsController");

//Jobs routes
// /apis/job/create
router.post('/job/create', createJob);

// /apis/job/id
router.get('/job/:id', singleJob);

// /apis/job/update/:job_id
router.put('/job/update/:job_id', updateJob);

// /apis/job/update/:job_id
router.delete('/job/delete/:job_id', deleteJob);

// /apis/jobs/show
router.get('/jobs/show', showJobs);

module.exports = router;