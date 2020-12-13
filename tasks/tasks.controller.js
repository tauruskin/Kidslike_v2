const { ChildModel } = require("../childs/childs.model");
const { TaskModel } = require("./tasks.model");

exports.createTask = async (req, res, next) => {

  const newTask = await TaskModel.create(req.body);
  const newTaskId = newTask.id
 const childId = req.params.id;
  const updatedTask = await TaskModel.findByIdAndUpdate(newTaskId)
  if (!updatedTask)
  {
    res.status(400).send("task not created")
  }
  updatedTask.childId = childId
  updatedTask.save()
    return res.status(201).send(updatedTask);
  
};

exports.getTasks = async (req, res, next) => {
   const { childrenId } = req.user;
  const usersTasks = await TaskModel.find({ childId: childrenId.map(el => el)})
    return res.status(200).send(usersTasks);
};

exports.getTaskById = async (req, res, next) => {

    const task = await TaskModel.findById(req.params.id);
  if (!task) {
    return res.status(404).send("Contact not found");
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
      return res.status(404).send("Child not found");
    }
    return res.status(204).send();
 
};
