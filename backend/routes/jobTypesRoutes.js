const express = require("express");
const router = express.Router();
const {allUsers, singleUser, editUser, deleteUser} = require("../controllers/userController");
const {isAdmin, isAuthenticated} = require("../middleware/auth");
const {createJobType, allJobsType, updateJobType, deleteJobType} = require("../controllers/jobsTypeController");

//Job routes

// /api/type/create
router.post('/type/create', isAuthenticated, isAdmin, createJobType)

// /api/type/jobs
router.get('/type/jobs', allJobsType)

// /api/type/update/jobs
router.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType)

// /api/type/delete/jobs
router.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobType)


module.exports = router;