const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getProfile } = require('../controllers/userController');

// Protected route: Dashboard
router.get('/dashboard', authMiddleware, (req, res) => {
  return res.json({
    msg: `Welcome to the dashboard, user with ID: ${req.user.userId}`,
  });
});

// Protected route: Profile
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
