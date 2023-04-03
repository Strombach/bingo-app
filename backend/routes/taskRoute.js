const express = require('express');

const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
const blockPermissions = require('../middleware/blockPermissions');

const controller = require('../controllers/taskController');

router.get('/', checkAuth, controller.index);

router.get('/:taskId', checkAuth, controller.getTask);

router.post('/', checkAuth, blockPermissions, controller.postTask);

router.patch('/:taskId', checkAuth, blockPermissions, controller.updateTask);

router.delete('/', checkAuth, blockPermissions, controller.deleteTask);

module.exports = router;
