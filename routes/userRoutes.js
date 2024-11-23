const express = require('express');
const router = express.Router();
const { createUser, getUsers, getRoleUsers } = require('../controllers/userController');

// User Management APIs
router.post('/create', createUser);
router.get('/get', getUsers); // Admin-only
router.get('/:role/get', getRoleUsers); // E.g., /users/teachers/get

module.exports = router;
