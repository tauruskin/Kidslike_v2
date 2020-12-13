const { string } = require("joi");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    name: { type: String, required: true },
    points: { type: Number, required: true },
    isCompleted: { type: String, 
      required: false },
    daysToComplete: { type: String, required: false },
    childId: { type: String, required: false},
  },
  {
    timestamps: true,
  }
);

exports.TaskModel = mongoose.model("Task", taskSchema);
