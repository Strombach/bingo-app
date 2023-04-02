const express = require('express');

const router = express.Router();

const checkAuth = require('../middleware/checkAuth');

const controller = require('../controllers/taskController');

router.get('/', checkAuth, controller.index);

router.get('/:taskId', checkAuth, controller.getTask);

router.post('/', checkAuth, controller.postTask);

router.patch('/:taskId', checkAuth, controller.updateTask);

router.delete('/', checkAuth, controller.deleteTask);

module.exports = router;
