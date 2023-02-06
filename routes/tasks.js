const express = require('express')
const router = express.Router()
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasks')

//all base routes
router.route('/')
//get all tasks
.get(getAllTasks)
//create new task
.post(createTask)


//all id routes
router.route('/:id')
//get single task
.get(getTask)
//update task
.patch(updateTask)
//delete task
.delete(deleteTask)


module.exports = router