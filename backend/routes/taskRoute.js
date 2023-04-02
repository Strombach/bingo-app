const express = require('express');

const router = express.Router();

const controller = require('../controllers/taskController');

router.get('/', controller.index);

router.get('/:taskId', controller.getTask);

router.post('/', controller.postTask);

router.patch('/:taskId', controller.updateTask);

router.delete('/', controller.deleteTask);

module.exports = router;
