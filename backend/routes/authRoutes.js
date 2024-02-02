const express = require("express");
const router = express.Router();
const {isAuthenticated, isAdmin} = require("../middleware/auth");
const {signin, logout, userProfile} = require("../controllers/authController");

//Auth Routes
// /api/signup
//router.post('/signup', signup);

// /api/signin
router.post('/signin', isAdmin, signin);

// /api/logout
router.get('/logout', logout);

// /api/me
router.get('/me', isAuthenticated, userProfile);

module.exports = router;