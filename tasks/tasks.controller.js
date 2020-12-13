const { TaskModel } = require("./tasks.model");

exports.createTask = async (req, res, next) => {
    const newtask = await TaskModel.create(req.body);
    return res.status(201).send(newtask);
};

exports.getTasks = async (req, res, next) => {
    const tasks = await TaskModel.find();
     console.log(tasks);
    return res.status(200).send(tasks);
};

exports.getTaskById = async (req, res, next) => {
    const task = await TaskModel.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    return res.status(200).send(task);
};

exports.updateTask = async (req, res, next) => {
    const { id } = req.params;
    const updatedtask = await TaskModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedtask) {
      return res.status(404).send("task not found");
    }
    return res.status(200).send(updatedtask);
};

exports.deleteTask = async (req, res, next) => {
    const { id } = req.params;
    const deletetask = await TaskModel.findByIdAndDelete(id);
    if (!deletetask) {
      return res.status(404).send("task not found");
    }
    return res.status(204).send();
};
