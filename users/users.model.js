const { array } = require("joi");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    username: { type: String, required: true },
    tokens: [{ type: String }],
    // verificationToken: { type: String },
    // avatarURL: {type: String, unique: true},
    children: [{type : String, unique: true }]
  },
  {
    timestamps: true,
  }
);

exports.UserModel = mongoose.model("User", UserSchema);
