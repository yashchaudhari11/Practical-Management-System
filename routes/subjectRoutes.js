const express = require('express');
const router = express.Router();
const { createSubject, getSubjects } = require('../controllers/subjectController');

// Subject Management APIs
router.post('/create', createSubject); // Admin-only
router.get('/get', getSubjects);

module.exports = router;
