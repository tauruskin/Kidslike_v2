const { Router } = require("express");
const {
  createHabit,
  getHabits,
  getHabitById,
  updateHabit,
  deleteHabit,
} = require("./habits.controller");
const { validate } = require("../helpers/validate");
const {
  CreateHabitSchema,
  UpdateHabitSchema,
  validateIdSchema,
} = require("./habits.schemes");
const { asyncWrapper } = require("../helpers/wrapper_Try_Catch");
const { authorize } = require("../helpers/auth/token_verify");
const { HabitModel } = require("./habits.model");
const mongoose = require("mongoose");

const router = Router();

// router.all(authorize);

router.param("habitsId", async (req, res, next, habitsId) => {
  if (!mongoose.Types.ObjectId.isValid(habitsId)) {
    return res.status(400).send("Validation failed");
  }

  const habit = await HabitModel.findById(habitsId);
  if (!habit) {
    return res.status(404).send("Habit not found");
  }
  req.habit = habit;
  return next();
});

// CRUD

// 1. C - Create
router.post("/", validate(CreateHabitSchema), asyncWrapper(createHabit));

// 2. R - Read
router.get("/", asyncWrapper(getHabits));
// router.get(
//   "/:habitsId",
//   asyncWrapper(getHabitById)
// );

// // 3. U - Update
router.patch(
  "/:habitsId",
  validate(UpdateHabitSchema),
  asyncWrapper(updateHabit)
);

// 4. D - Delete
router.delete("/:habitsId", asyncWrapper(deleteHabit));

exports.habitsRouter = router;
