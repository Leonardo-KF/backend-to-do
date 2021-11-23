const tasksModel = require("./../models/models");

class tasksService {
  findAll = async () => await tasksModel.find();

  findById = async (id) => {
    return await tasksModel.findById(id);
  };

  create = async (task) => {
    return await tasksModel.create(task);
  };

  edit = async (id, task) => {
    return await tasksModel.updateOne({ _id: id }, task);
  };

  delete = async (id) => {
    return await tasksModel.deleteOne({ _id: id });
  };
}

module.exports = tasksService;
