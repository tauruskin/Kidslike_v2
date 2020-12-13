const { ChildModel } = require("../childs/childs.model");
const { NotFound } = require("../helpers/errors/auth.errors");
const { GiftModel } = require("./gifts.model");

exports.createGift = async (req, res, next) => {
    const newGift = await GiftModel.create(req.body);
    return res.status(201).send(newGift);
};

exports.getGifts = async (req, res, next) => {

  const { childrenId } = req.user;
  if (!childrenId.length) return res.status(200).send([]);

  const children = await ChildModel.find({ _id: childrenId.map((el) => el) });
  if (!children) return res.status(200).send([]);

  const gifts = await GiftModel.find({ childId: children.map((el) => el) });
  if (!gifts) return res.status(200).send([]);

  return res.status(200).send(gifts);
};

exports.getGiftById = async (req, res, next) => {
  const { giftId } = req.params;
    const gift = await GiftModel.findById(giftId);
    if (!gift) {
     throw new NotFound("Gift not found");
    }
    return res.status(200).send(gift); 
};

exports.updateGift = async (req, res, next) => {
    const { giftId } = req.params;
    const updatedGift = await GiftModel.findByIdAndUpdate(giftId, req.body, {
      new: true,
    });
    if (!updatedGift) {
      throw new NotFound("Gift not found");
    }
    return res.status(200).send(updatedGift);

};

exports.deleteGift = async (req, res, next) => {

    const { giftId } = req.params;

    const deleteGift = await GiftModel.findByIdAndDelete(giftId);
    if (!deleteGift) {
      throw new NotFound("Gift not found");
    }
    return res.status(204).send();
 
};
