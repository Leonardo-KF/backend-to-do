const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  titulo: { type: String, require: true },
  descricao: { type: String, require: true },
  prioridade: { type: String, require: true },
  status: { type: String, require: true },
  prazo: { type: Date },
  datac: { type: Date, default: Date.now },
});

const taskmodel = mongoose.model("tarefas", TaskSchema);

module.exports = taskmodel;
