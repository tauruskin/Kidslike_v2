const { array } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

function daysToCompleteExample(length) {
  let array =[];
  for (let i = 0; i < length; i++) {
    array.push(null);
  }
  return array;
}

const habitSchema = new Schema(
  {
    name: { type: String, required: true },
    points: { type: String, required: true },
    daysToComplete: { type: [String], default: daysToCompleteExample(10), required: true},
    childId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

exports.HabitModel = mongoose.model("Habit", habitSchema);
