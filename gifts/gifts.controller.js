const { GiftModel } = require("./gifts.model");

exports.createGift = async (req, res, next) => {
  try {
    const newGift = await GiftModel.create(req.body);
    const { _id } = req.user;

    return res.status(201).send(newGift);
  } catch (err) {
    next(err);
  }
};

exports.getGifts = async (req, res, next) => {
  console.log('req.user', req.user)

console.log('req.user.childrenId', req.user.childrenId)
   

    // if (childrenId.length) {
    //   const promises = childrenId.map(GiftModel.findById);
    //   const gifts = await Promise.all(promises);
    // }
    const testgifts = [
      {
        name: "Legotest",
        price: "5",
        imageUrl: "",
        childId: 1,
      },
    ];
    return res.status(200).send(testgifts);

};

exports.getGiftById = async (req, res, next) => {
  try {
    const gift = await GiftModel.findById(req.params.id);
    if (!gift) {
      return res.status(404).send("Contact not found");
    }

    return res.status(200).send(gift);
  } catch (err) {
    next(err);
  }
};

exports.updateGift = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedGift = await GiftModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedGift) {
      return res.status(404).send("Gift not found");
    }
    return res.status(200).send(updatedGift);
  } catch (err) {
    next(err);
  }
};

exports.deleteGift = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteGift = await GiftModel.findByIdAndDelete(id);
    if (!deleteGift) {
      return res.status(404).send("Child not found");
    }
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};
