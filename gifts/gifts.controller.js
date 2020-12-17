const { ChildModel } = require("../childs/childs.model");
const { GiftModel } = require("./gifts.model");

const path = require("path");
const { deleteOldImage } = require("../helpers/image.upload");
require("dotenv").config({ path: path.join(__dirname, ".env") });

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

exports.createGift = async (req, res, next) => {

  const baseimageURL =`${process.env.DOMAIN_ADDRESS}/images/`;
  if(req.file) {
    const { filename } = req.file;
    const newImageURL = baseimageURL+filename;
  
    const newGift = await GiftModel.create({...req.body, imageUrl: newImageURL});
    return res.status(201).send(newGift);
  } else {
    const newGift = await GiftModel.create({...req.body})
    return res.status(201).send(newGift);
  }
};

exports.updateGift = async (req, res, next) => {
  const baseimageURL =`${process.env.DOMAIN_ADDRESS}/images/`;
  const { _id } = req.gift;
  if(req.file) { 

    const { filename } = req.file;
  
    const newImageURL = baseimageURL+filename;
    const newData = {...req.body, imageUrl: newImageURL}
    const updatedGift = await GiftModel.findByIdAndUpdate(_id, newData, {
      new: true,
    });
    //const oldImageName = imageUrl.replace(baseimageURL, '');
    //await deleteOldImage(oldImageName);
  
    return res.status(200).send(updatedGift);
  } else {
    console.log('req.body', req.body)
    const updatedGift = await GiftModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    return res.status(200).send(updatedGift);
  }

};

exports.deleteGift = async (req, res, next) => {
  const { _id } = req.gift;
  await GiftModel.findByIdAndDelete(_id);
  return res.status(204).send();
};

// exports.updateUserAvatar = async (req, res, next) => {
//   try {
//       const { _id, avatarURL } = req.user;
//       const baseAvatarURL = 'http://localhost:3000/images/';
//       const { filename } = req.file;
//       const newAvatarURL = baseAvatarURL+filename;
//       const updatedUser = await UserModel.findByIdAndUpdate(_id, {avatarURL: newAvatarURL}, { new: true });
//       const oldAvatarName = avatarURL.replace(baseAvatarURL, '');
//       await deleteOldAvatar(oldAvatarName);
//       return res.status(200).send({avatarURL: updatedUser.avatarURL});
//   } catch (error) {
//       next(error);
//   }
// }