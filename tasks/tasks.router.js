const { Router } = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("./tasks.controller");
const { authorize } = require("../helpers/auth/token_verify");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch");
const { validate } = require("../helpers/validate");
const { createTaskSchema, updateTaskSchema } = require("./tasks.schemes");

const router = Router();

// CRUD

// 1. C - Create
router.post(
  "/",
  authorize,
  validate(createTaskSchema),
  asyncWrapper(createTask)
);

// 2. R - Read
router.get("/", authorize, asyncWrapper(getTasks));
router.get("/:id", authorize, asyncWrapper(getTaskById));

// // 3. U - Update
router.patch(
  "/:id",
  authorize,
  validate(updateTaskSchema),
  asyncWrapper(updateTask)
);

// 4. D - Delete
router.delete("/:id", authorize, asyncWrapper(deleteTask));

exports.tasksRouter = router;
