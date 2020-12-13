const mongoose = require("mongoose");
const { Schema, ObjectID } = mongoose;

const giftSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, default: "" },
    childId: { type: ObjectID, required: true },
  },
  {
    timestamps: true,
  }
);

exports.GiftModel = mongoose.model("Gift", giftSchema);
