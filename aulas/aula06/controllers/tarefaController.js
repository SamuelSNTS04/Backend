const model = require("../models/tarefaModel");

const listarTarefas = (req, res) => {
  res.json(model.listar());
};

const criarTarefas = (req, res) => {
  const novaTarefa = model.criar(req.body);
  res.status(201).json(novaTarefa);
};

const buscarTarefa = (req, res, next) => {
  const { id } = req.params;
  const tarefaEncontrada = model.obter(id);
  if (tarefaEncontrada) {
    return next();
  }
  res.status(404).json({ msg: "Tarefa não encontrada!" });
};

const listarTarefaId = (req, res) => {
  const { id } = req.params;
  const tarefaEncontrada = model.obter(id);
  res.json(tarefaEncontrada);
};

const atualizarTarefa = (req, res) => {
  const { id } = req.params;
  const tarefaEncontrada = model.atualizar({ id, ...req.body });
  res.json(tarefaEncontrada);
};

const deletarTarefa = (req, res) => {
  const { id } = req.params;
  model.deletar(id);
  res.status(204).end();
};

module.exports = {
  listarTarefas,
  criarTarefas,
  listarTarefaId,
  atualizarTarefa,
  deletarTarefa,
  buscarTarefa
};
