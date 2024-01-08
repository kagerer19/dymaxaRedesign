const express = require("express");
const { allUsers, singleUser, editUser, deleteUser} = require("../controllers/userController");
const {isAuthenticated, isAdmin} = require("../middleware/auth");
const router = express.Router();

//User Routes
// /api/allusers
router.get('/allUsers',isAuthenticated, isAdmin, allUsers);

// api/user/id
router.get('/user/:id',isAuthenticated, singleUser);

// api/user/edit/id
router.put('/user/edit/:id',isAuthenticated, editUser);

// api/admin/user/delete/id
router.delete('/admin/user/delete/:id',isAuthenticated, isAdmin, deleteUser);


module.exports = router;