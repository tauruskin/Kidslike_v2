const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: { type: String, required: true },
    points: { type: Number, required: true },
    isCompleted: { type: Boolean, required: false, default: false },
    daysToComplete: { type: Number, required: false },
    childId: { type: ObjectID, required: false },
  },
  {
    timestamps: true,
  }
);

exports.TaskModel = mongoose.model("Task", taskSchema);
