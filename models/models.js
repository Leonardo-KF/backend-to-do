const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  id: { type: Number, default: Date.now },
  titulo: { type: String, require: true },
  descricao: { type: String, require: true },
  data: { type: Date },
});

const taskmodel = mongoose.model("tarefas", TaskSchema);

module.exports = taskmodel;
