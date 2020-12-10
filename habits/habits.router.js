const { Router } = require("express");
const {
  createHabit,
  getHabits,
  getHabitById,
  updateHabit,
  deleteHabit,
} = require("./habits.controller");

const router = Router();

// CRUD

// 1. C - Create
router.post("/", createHabit);

// 2. R - Read
router.get("/", getHabits);
router.get("/:id", getHabitById);

// // 3. U - Update
router.patch("/:id", updateHabit);

// 4. D - Delete
router.delete("/:id", deleteHabit);

exports.habitsRouter = router;
