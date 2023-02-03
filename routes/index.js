const express = require('express');

const router = express.Router();

const toDoController = require('../controllers/ToDoController');

router.get('/',toDoController.ToDo);

module.exports = router;
