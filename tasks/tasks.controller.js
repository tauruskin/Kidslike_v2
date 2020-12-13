const { TaskModel } = require("./tasks.model");
const { NotFound } = require("../helpers/errors/auth.errors");

exports.createTask = async (req, res, next) => {
  const newtask = await TaskModel.create(req.body);
  return res.status(201).send(newtask);
};

exports.getTasks = async (req, res, next) => {
  const tasks = await TaskModel.find();
  return res.status(200).send(tasks);
};

exports.getTaskById = async (req, res, next) => {
  const task = await TaskModel.findById(req.params.id);
  if (!task) {
    throw new NotFound("Task not found");
  }
  return res.status(200).send(task);
};

exports.updateTask = async (req, res, next) => {
  const { id } = req.params;
  const updatedtask = await TaskModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedtask) {
    throw new NotFound("Task not found");
  }
  return res.status(200).send(updatedtask);
};

exports.deleteTask = async (req, res, next) => {
  const { id } = req.params;
  const deletetask = await TaskModel.findByIdAndDelete(id);
  if (!deletetask) {
    throw new NotFound("Task not found");
  }
  return res.status(204).send();
};
