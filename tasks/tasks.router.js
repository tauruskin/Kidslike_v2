const { Router } = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("./tasks.controller");

const router = Router();

// CRUD

// 1. C - Create
router.post("/", createTask);

// 2. R - Read
router.get("/", getTasks);
router.get("/:id", getTaskById);

// // 3. U - Update
router.patch("/:id", updateTask);

// 4. D - Delete
router.delete("/:id", deleteTask);

exports.tasksRouter = router;
