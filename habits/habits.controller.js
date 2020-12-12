const { NotFound } = require("../helpers/errors/auth.errors");
const { HabitModel } = require("./habits.model");

exports.createHabit = async (req, res, next) => {
  const newHabit = await HabitModel.create(req.body);
  return res.status(201).send(newHabit);
};

exports.getHabits = async (req, res, next) => {
  const habits = await HabitModel.find();
  return res.status(200).send(habits);
};

exports.getHabitById = async (req, res, next) => {
  const habit = await HabitModel.findById(req.params.id);
  if (!habit) {
    return res.status(404).send("Contact not found");
  }
  return res.status(200).send(habit);
};

exports.updateHabit = async (req, res, next) => {
  const { id } = req.params;
  const updatedHabit = await HabitModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedHabit) {
    throw new NotFound("Habit not found");
  }
  return res.status(200).send(updatedHabit);
};

exports.deleteHabit = async (req, res, next) => {
  const { id } = req.params;

  const deleteHabit = await HabitModel.findByIdAndDelete(id);
  if (!deleteHabit) {
    throw new NotFound("Habit not found");
  }
  return res.status(204).send();
};
