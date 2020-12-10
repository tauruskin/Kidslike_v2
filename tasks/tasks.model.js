const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: { type: String, required: true },
    points: { type: String, required: true },
    isCompleted: { type: String, required: false },
    daysToComplet: { type: String, required: false },
    childId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

exports.TaskModel = mongoose.model("Task", taskSchema);
