const express = require("express");
const router = express.Router();
const {isAuthenticated, isAdmin} = require("../middleware/auth");
const {signin, logout, userProfile} = require("../controllers/authController");

//Auth Routes
// /apis/signup
//router.post('/signup', signup);

// /apis/signin
router.post('/signin', isAdmin, signin);

// /apis/logout
router.get('/logout', logout);

// /apis/me
router.get('/me', isAuthenticated, userProfile);

module.exports = router;