const { array } = require("joi");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index:true },
    passwordHash: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    tokens: [{ type: String }],
<<<<<<< HEAD
    verificationToken: { type: String },
    childrenId: [{type : String, unique: true }],
=======
    // verificationToken: { type: String },
>>>>>>> dev
    // avatarURL: {type: String, unique: true},
    children: [{type : String, unique: true }]
  },
  {
    timestamps: true,
  }
);

exports.UserModel = mongoose.model("User", UserSchema);
