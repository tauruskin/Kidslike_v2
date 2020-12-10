const mongoose = require("mongoose");
const { Schema } = mongoose;

const childSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    points: { type: String, required: false },
    // gifts: масив id
    // habits: масив id
    // tasks: масив id
  },
  {
    timestamps: true,
  }
);

exports.ChildModel = mongoose.model("Child", childSchema);
