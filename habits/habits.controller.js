const { HabitModel } = require("./habits.model");

exports.createHabit = async (req, res, next) => {
    const newHabit = await HabitModel.create(req.body);

    return res.status(201).send(newHabit);
};

exports.getHabits = async (req, res, next) => {
  try {
    const habits = await HabitModel.find();
    return res.status(200).send(habits);
  } catch (err) {
    next(err);
  }
};

exports.getHabitById = async (req, res, next) => {
  try {
    const habit = await HabitModel.findById(req.params.id);
    if (!habit) {
      return res.status(404).send("Contact not found");
    }

    return res.status(200).send(habit);
  } catch (err) {
    next(err);
  }
};

exports.updateHabit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedHabit = await HabitModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedHabit) {
      return res.status(404).send("Habit not found");
    }
    return res.status(200).send(updatedHabit);
  } catch (err) {
    next(err);
  }
};

exports.deleteHabit = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteHabit = await HabitModel.findByIdAndDelete(id);
    if (!deleteHabit) {
      return res.status(404).send("Child not found");
    }
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};
