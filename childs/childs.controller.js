const { UserModel } = require("../users/users.model");
const { ChildModel } = require("./childs.model");

exports.createChild = async (req, res, next) => {

  const newChild = await ChildModel.create(req.body);
  const newChildId = await newChild.id;
   const userId = req.user._id;
   console.log(userId)
  
  const updatedUser = await UserModel.findByIdAndUpdate(userId)
  if (!updatedUser)
  {
    res.status(400).send("User not found")
    }
  updatedUser.children.push(newChildId)
  updatedUser.save()
  return res.status(201).send(newChild);

};

exports.getChilds = async (req, res, next) => {
    const childs = await ChildModel.find();
  return res.status(200).send(childs);

};

exports.getChildById = async (req, res, next) => {
  
    const child = await ChildModel.findById(req.params.id);
    if (!child) {
      return res.status(404).send("Contact not found");
    }

    return res.status(200).send(child);
  
};

exports.updateChild = async (req, res, next) => {

    const { id } = req.params;
    const updatedChild = await ChildModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedChild) {
      return res.status(404).send("Child not found");
    }
    return res.status(200).send(updatedChild);
  
};

exports.deleteChild = async (req, res, next) => {

    const { id } = req.params;

    const deleteChild = await ChildModel.findByIdAndDelete(id);
    if (!deleteChild) {
      return res.status(404).send("Child not found");
    }
    return res.status(204).send();
 
};
