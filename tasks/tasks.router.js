const { Router } = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("./tasks.controller");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch");

const router = Router();

// CRUD

// 1. C - Create
router.post("/", asyncWrapper(createTask));

// 2. R - Read
router.get("/", asyncWrapper(getTasks));
router.get("/:id", asyncWrapper(getTaskById));

// // 3. U - Update
router.patch("/:id",asyncWrapper(updateTask));

// 4. D - Delete
router.delete("/:id", asyncWrapper(deleteTask));

exports.tasksRouter = router;
