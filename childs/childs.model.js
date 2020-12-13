const mongoose = require("mongoose");
const { Schema } = mongoose;

const childSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    points: { type: String, required: false },
    userId: { type: String, required: true },
    gifts: [{ type: String, required: false }],
    habits: [{ type: String, required: false }],
    tasks: [{ type: String, required: false }],
  },
  {
    timestamps: true,
  }
);

exports.ChildModel = mongoose.model("Child", childSchema);
