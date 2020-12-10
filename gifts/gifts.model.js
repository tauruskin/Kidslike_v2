const mongoose = require("mongoose");
const { Schema } = mongoose;

const giftSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    imageUrl: { type: String, required: false },
    childId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

exports.GiftModel = mongoose.model("Gift", giftSchema);
