const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    tokens: [{ type: String }],
    verificationToken: { type: String },
    // avatarURL: {type: String, unique: true},
    childId: [{ type: ObjectId, unique: true }],
  },
  {
    timestamps: true,
  }
);

exports.UserModel = mongoose.model("User", UserSchema);
