const { ChildModel } = require("../childs/childs.model");
const { TaskModel } = require("./tasks.model");
const moment = require("moment");

exports.createTask = async (req, res, next) => {
  const newTask = await TaskModel.create(req.body);
  return res.status(201).send(newTask);
};

exports.getTasks = async (req, res, next) => {
  const { childId } = req.user;
  const usersTasks = await TaskModel.find({
    
    childId: childId.map((el) => el),
  });
  return res.status(200).send(usersTasks);
};

exports.getTaskById = async (req, res, next) => {
  return res.status(200).send(req.task);
};

exports.updateTask = async (req, res, next) => {
  const { _id, childId, isCompleted,points , createdAt } = req.task;

  const updatedTask = await TaskModel.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  const dayCreatedAt = moment(createdAt).format('X');
  const daysForTask = updatedTask.daysToComplete * 86400000;
  const today = Date.now();
  if ((daysForTask + dayCreatedAt) > today )
  {
    const updatedStatus = await TaskModel.findByIdAndUpdate(updatedTask._id, {
isCompleted: false
    },
      { new: true })
  };
  if (updatedTask.isCompleted) {
    const UpdatedChild = ChildModel.findByIdAndUpdate(
      updatedTask.childId,
      {
        $inc: { points: updatedTask.points },
      },
      { new: true }
    );
  }
  
  return res.status(200).send(updatedTask);
};

exports.deleteTask = async (req, res, next) => {
  const { _id } = req.task;
  await TaskModel.findByIdAndDelete(_id);
  return res.status(204).send();
};
