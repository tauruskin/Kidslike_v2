const { ChildModel } = require("../childs/childs.model");
const { GiftModel } = require("./gifts.model");

exports.createGift = async (req, res, next) => {
    // const newGift = await GiftModel.create(req.body);
    // return res.status(201).send(newGift);
};

exports.getGifts = async (req, res, next) => {

  // const { childrenId } = req.user;
  // if (!childrenId.length) return res.status(200).send([]);

  // const children = await ChildModel.find({ _id: childrenId.map((el) => el) });
  // if (!children) return res.status(200).send([]);

  // const gifts = await GiftModel.find({ childId: children.map((el) => el) });
  // if (!gifts) return res.status(200).send([]);

  // return res.status(200).send(gifts);
};

exports.getGiftById = async (req, res, next) => {
  // try {
  //   const gift = await GiftModel.findById(req.params.id);
  //   if (!gift) {
  //     return res.status(404).send("Contact not found");
  //   }

  //   return res.status(200).send(gift);
  // } catch (err) {
  //   next(err);
  // }
};

exports.updateGift = async (req, res, next) => {
  // try {
  //   const { id } = req.params;
  //   const updatedGift = await GiftModel.findByIdAndUpdate(id, req.body, {
  //     new: true,
  //   });
  //   if (!updatedGift) {
  //     return res.status(404).send("Gift not found");
  //   }
  //   return res.status(200).send(updatedGift);
  // } catch (err) {
  //   next(err);
  // }
};

exports.deleteGift = async (req, res, next) => {
  // try {
  //   const { id } = req.params;

  //   const deleteGift = await GiftModel.findByIdAndDelete(id);
  //   if (!deleteGift) {
  //     return res.status(404).send("Child not found");
  //   }
  //   return res.status(204).send();
  // } catch (err) {
  //   next(err);
  // }
};
