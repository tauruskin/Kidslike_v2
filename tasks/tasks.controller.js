const { TaskModel } = require("./tasks.model");

exports.createTask = async (req, res, next) => {
  const newTask = await TaskModel.create(req.body);
  const newTaskId = newTask.id;
  const childId = req.params.id;
  const updatedTask = await TaskModel.findByIdAndUpdate(newTaskId);
  if (!updatedTask) {
    res.status(400).send("task not created");
  }
  updatedTask.childId = childId;
  updatedTask.save();
  return res.status(201).send(updatedTask);
};

exports.getTasks = async (req, res, next) => {
  const { childrenId } = req.user;
  const usersTasks = await TaskModel.find({
    childId: childrenId.map((el) => el),
  });
  return res.status(200).send(usersTasks);
};

exports.getTaskById = async (req, res, next) => {
  return res.status(200).send(req.task);
};

exports.updateTask = async (req, res, next) => {
  const { _id } = req.task;
  const updatedtask = await TaskModel.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  return res.status(200).send(updatedtask);
};

exports.deleteTask = async (req, res, next) => {
  const { _id } = req.task;
  await TaskModel.findByIdAndDelete(_id);
  return res.status(204).send();
};
