const { ChildModel } = require("./childs.model");

exports.createChild = async (req, res, next) => {
  try {
    const newChild = await ChildModel.create(req.body);

    return res.status(201).send(newChild);
  } catch (err) {
    next(err);
  }
};

exports.getChilds = async (req, res, next) => {
  try {
    const childs = await ChildModel.find();
    return res.status(200).send(childs);
  } catch (err) {
    next(err);
  }
};

exports.getChildById = async (req, res, next) => {
  try {
    const child = await ChildModel.findById(req.params.id);
    if (!child) {
      return res.status(404).send("Contact not found");
    }

    return res.status(200).send(child);
  } catch (err) {
    next(err);
  }
};

exports.updateChild = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedChild = await ChildModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedChild) {
      return res.status(404).send("Child not found");
    }
    return res.status(200).send(updatedChild);
  } catch (err) {
    next(err);
  }
};

exports.deleteChild = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteChild = await ChildModel.findByIdAndDelete(id);
    if (!deleteChild) {
      return res.status(404).send("Child not found");
    }
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};
