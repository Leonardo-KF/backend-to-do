const express = require("express");

const tasksController = require("./../controller/task.controller");

const taskscontroller = new tasksController();

const router = express.Router();

router.get("/", taskscontroller.getTasks);

router.get("/:id", taskscontroller.getTasksById);

router.post("/add", taskscontroller.CreateTask);

router.put("/:id", taskscontroller.editTask);

router.delete("/:id", taskscontroller.deleteTask);

module.exports = router;
