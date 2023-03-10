const express = require('express');

const router = express.Router();

const toDoController = require('../controllers/ToDoController');

router.get('/',toDoController.ToDolist);

router.post('/create-todo',toDoController.createToDo);

router.post('/delete-todo',toDoController.deleteTodo);
module.exports = router;
