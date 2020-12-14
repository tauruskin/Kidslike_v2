const { ChildModel } = require("../childs/childs.model");
const { GiftModel } = require("./gifts.model");

exports.createGift = async (req, res, next) => {
  const newGift = await GiftModel.create(req.body);
  return res.status(201).send(newGift);
};

exports.getGifts = async (req, res, next) => {
  const { childId } = req.user;
  if (!childId.length) return res.status(200).send([]);

  const children = await ChildModel.find({ _id: childId.map((el) => el) });
  if (!children) return res.status(200).send([]);

  const gifts = await GiftModel.find({ childId: children.map((el) => el) });
  if (!gifts) return res.status(200).send([]);

  return res.status(200).send(gifts);
};

exports.getGiftById = async (req, res, next) => {
  return res.status(200).send(req.gift);
};

exports.updateGift = async (req, res, next) => {
  const { _id } = req.gift;
  const updatedGift = await GiftModel.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  return res.status(200).send(updatedGift);
};

exports.deleteGift = async (req, res, next) => {
  const { _id } = req.gift;
  await GiftModel.findByIdAndDelete(_id);
  return res.status(204).send();
};
