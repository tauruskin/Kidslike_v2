const mongoose = require ('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  passwordHash: {type: String, required: true},
  username: {type: String, required:true},
  tokens: [{type: String}],
  verificationToken: {type: String}
  // subscription: {type: String, enum:["free", "pro", "premium"], default:"free"},
  // avatarURL: {type: String, unique: true},
})

exports.UserModel = mongoose.model('User', UserSchema)