const { TaskModel } = require("./tasks.model");

exports.createTask = async (req, res, next) => {
  const newtask = await TaskModel.create(req.body);
  return res.status(201).send(newtask);
};

exports.getTasks = async (req, res, next) => {
  const tasks = await TaskModel.find();
  return res.status(200).send(tasks);
};

exports.getTaskById = async (req, res, next) => {
  return res.status(200).send(req.task);
};

exports.updateTask = async (req, res, next) => {
  const { _id } = req.task;
  await TaskModel.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  return res.status(200).send(updatedtask);
};

exports.deleteTask = async (req, res, next) => {
  const { _id } = req.task;
  await TaskModel.findByIdAndDelete(_id);
  return res.status(204).send();
};
