const { Router } = require("express");
const {
  createHabit,
  getHabits,
  getHabitById,
  updateHabit,
  deleteHabit,
} = require("./habits.controller");
const { validate } = require("../helpers/validate");
const { CreateHabitSchema, UpdateHabitSchema } = require("./habits.schemes");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch");
const { authorize } = require("../helpers/auth/token_verify");


const router = Router();

// CRUD

// 1. C - Create
router.post("/", validate(CreateHabitSchema), asyncWrapper(createHabit));

// 2. R - Read
router.get("/", getHabits);
router.get("/:id", getHabitById);

// // 3. U - Update
router.patch("/:id", authorize, validate(UpdateHabitSchema), asyncWrapper(updateHabit));

// 4. D - Delete
router.delete("/:id", deleteHabit);

exports.habitsRouter = router;
