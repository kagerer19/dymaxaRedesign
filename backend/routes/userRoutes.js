const express = require("express");
const router = express.Router();
const {isAuthenticated, isAdmin} = require("../middleware/auth");
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory} = require("../controllers/userController");

//User Routes
// /apis/allusers
router.get('/allUsers',isAuthenticated, isAdmin, allUsers);

// apis/admin/id
router.get('/user/:id',isAuthenticated, singleUser);

// apis/admin/edit/id
router.put('/user/edit/:id',isAuthenticated, editUser);

// apis/admin/admin/delete/id
router.delete('/admin/user/delete/:id', deleteUser);

// apis/admin/jobhistory/'
router.post('/user/jobhistory',isAuthenticated,  createUserJobsHistory);


module.exports = router;