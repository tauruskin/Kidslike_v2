const { Router } = require("express");
const { authorize } = require("../helpers/auth/token_verify");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch");
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
router.post("/:id", authorize, asyncWrapper(createTask));

// 2. R - Read
router.get("/", authorize, asyncWrapper(getTasks));
router.get("/:id", authorize, asyncWrapper(getTaskById));

// // 3. U - Update
router.patch("/:id", authorize, asyncWrapper(getTaskById));

// 4. D - Delete
router.delete("/:id", authorize, deleteTask);

exports.tasksRouter = router;
