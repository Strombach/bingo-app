const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');

const controller = require('../controllers/rulesController');

router.get('/', checkAuth, controller.index);
router.post('/', checkAuth, controller.createRules);

module.exports = router;
