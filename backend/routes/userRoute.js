const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');

const controller = require('../controllers/userController');

router.post('/login', controller.userLogin);

router.post('/register', checkAuth, controller.userRegister);

module.exports = router;
