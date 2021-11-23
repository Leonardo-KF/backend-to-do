const TasksServ = require("../service/tarefas.service");

const tasksServ = new TasksServ();

class TasksController {
  getTasks = async (req, res) => {
    const tasks = await tasksServ.findAll();

    res.send(tasks);
  };

  getTasksById = async (req, res) => {
    const task = await tasksServ.findById(req.params.id);

    res.send(task);
  };

  CreateTask = async (req, res) => {
    const task = req.body;
    if (!req.body) {
      return;
    }
    await tasksServ
      .create(task)
      .then(() => {
        res.send({ message: `${task.titulo} criada com sucesso` });
      })
      .catch(() => {
        res
          .status(500)
          .send({ error: `Erro no servidor, tente novamente mais tarde` });
      });
  };

  editTask = async (req, res) => {
    const id = req.params.id;

    const taskEdit = req.body;

    await tasksServ
      .edit(id, taskEdit)
      .then(() => {
        res.send({ message: `Tarefa Editada com sucesso` });
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: `Erro no servidor, tente novamente mais tarde` });
      });
  };

  deleteTask = async (req, res) => {
    const id = req.params.id;

    await tasksServ
      .delete(id)
      .then(() => {
        res.send({ message: "Excluido com sucesso" });
      })
      .catch((err) => {
        res
          .status(500)
          .send({ error: `Erro no servidor, tente novamente mais tarde` });
      });
  };
}

module.exports = TasksController;
