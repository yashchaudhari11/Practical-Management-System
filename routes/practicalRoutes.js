const express = require('express');
const router = express.Router();
const {
  createPractical,
  getPracticals,
  enrollPractical,
} = require('../controllers/practicalController');

// Practical Management APIs
router.post('/create', createPractical); // Teacher-only
router.get('/get', getPracticals);
router.post('/enroll', enrollPractical); // Student-only

module.exports = router;
