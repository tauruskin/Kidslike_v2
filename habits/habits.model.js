const mongoose = require("mongoose");
const { Schema } = mongoose;

const habitSchema = new Schema(
  {
    name: { type: String, required: true },
    points: { type: String, required: true },
    // isCompleted: масив прогресса
    childId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

exports.HabitModel = mongoose.model("Habit", habitSchema);
