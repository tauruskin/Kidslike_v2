const { UserModel } = require("../users/users.model");
const { ChildModel } = require("./childs.model");

exports.createChild = async (req, res, next) => {
  const newChild = await ChildModel.create(req.body);
  const { _id } = newChild;
  console.log(_id);
  console.log(req.user._id);
  await UserModel.findByIdAndUpdate(req.user._id, { childrenId: _id });
  return res.status(201).send(newChild);
};

exports.getChildren = async (req, res, next) => {
  const { childrenId } = req.user;
  const children = await ChildModel.find({ _id: childrenId.map((el) => el) });
  if (!children) {
    return res.status(404).send("Children not found");
  }
  return res.status(200).send(children);
};

exports.getChildById = async (req, res, next) => {
  return res.status(200).send(req.child);
};

exports.updateChild = async (req, res, next) => {
  const { _id } = req.child;
  const updatedChild = await ChildModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return res.status(200).send(updatedChild);
};

exports.deleteChild = async (req, res, next) => {
  const { _id } = req.child;
  await ChildModel.findByIdAndDelete(_id);
  return res.status(204).send();
};
