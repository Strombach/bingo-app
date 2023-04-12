const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');

const controller = require('../controllers/valueController');

router.get('/', checkAuth, controller.index);

router.post('/', checkAuth, controller.createValues);

router.patch('/', checkAuth, controller.updateValues);

module.exports = router;
