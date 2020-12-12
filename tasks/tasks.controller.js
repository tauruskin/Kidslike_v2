const { TaskModel } = require("./tasks.model");

exports.createTask = async (req, res, next) => {
  try {
    const newtask = await TaskModel.create(req.body);

    return res.status(201).send(newtask);
  } catch (err) {
    next(err);
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    console.log("get task");
    const tasks = await TaskModel.find();
     console.log(tasks);
    return res.status(200).send(tasks);
   
  } catch (err) {
    next(err);
  }
};

exports.getTaskById = async (req, res, next) => {
  try {
    const task = await TaskModel.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Contact not found");
    }

    return res.status(200).send(task);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedtask = await TaskModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedtask) {
      return res.status(404).send("task not found");
    }
    return res.status(200).send(updatedtask);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletetask = await TaskModel.findByIdAndDelete(id);
    if (!deletetask) {
      return res.status(404).send("Child not found");
    }
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};
