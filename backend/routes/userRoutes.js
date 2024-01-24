const express = require("express");
const router = express.Router();
const {isAuthenticated, isAdmin} = require("../middleware/auth");
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory} = require("../controllers/userController");

//User Routes
// /api/allusers
router.get('/allUsers',isAuthenticated, isAdmin, allUsers);

// api/admin/id
router.get('/user/:id',isAuthenticated, singleUser);

// api/admin/edit/id
router.put('/user/edit/:id',isAuthenticated, editUser);

// api/admin/admin/delete/id
router.delete('/admin/user/delete/:id', deleteUser);

// api/admin/jobhistory/'
router.post('/user/jobhistory',isAuthenticated,  createUserJobsHistory);


module.exports = router;