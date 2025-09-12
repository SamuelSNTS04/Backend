const express = require("express");

const tarefas = [
  { id: 1, nome: "Estudar middleware", concluida: false },
  { id: 2, nome: "Praticar Express", concluida: true },
];

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const dataHora = new Date().toLocaleString();
  const metodo = req.method;
  const url = req.originalUrl;

  console.log(`Data/hora: ${dataHora} - Método: ${metodo} - URL: ${url}`);

  next();
});

const router = express.Router();

router.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

router.post("/tarefas", (req, res) => {
  const { nome } = req.body;

  let novoId;

  if (tarefas.length > 0) {
    novoId = tarefas[tarefas.length - 1].id + 1;
  } else {
    novoId = 1;
  }

  const novaTarefa = {
    id: 3,
    nome: "Adicinando nova tarefa",
    concluida: true,
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

router.get("/tarefas/:tarefaId", (req, res) => {
  const idTarefa = parseInt(req.params.tarefaId);

  const tarefaEncontrada = tarefas.find((t) => t.id === idTarefa);

  if (!tarefaEncontrada) {
    const error = new Error("Tarefa não encontrada!");
    error.status = 400;
    return next(error);
  }

  res.json(tarefaEncontrada);
});

router.put("/tarefas/:tarefaId", (req, res) => {
  const idTarefa = parseInt(req.params.tarefaId);

  const indexTarefa = tarefas.find((t) => t.id === idTarefa);

  if (!indexTarefa) {
    const error = new Error("Tarefa não encontrada!");
    error.status = 400;
    return next(error);
  }

  const { descricao, concluida } = req.body;
  const tarefaAtualizar = tarefas[indexTarefa];

  if (descricao !== undefined) {
    tarefaAtualizar.nome = nome;
  }

  if (descricao !== undefined) {
    tarefaAtualizar.concluida = concluida;
  }

  res.json(tarefaAtualizar);
});

router.delete("/tarefas/:tarefaId", (req, res, next) => {
  const idTarefa = parseInt(req.params.tarefaId);

  const tamanhoAtualDoArray = tarefas.length;
  tarefas = tarefas.filter((t) => t.id !== idTarefa);

  if (tarefas.length < tamanhoAtualDoArray) {
    return res.status(204).end();
  }

  const error = new Error("Tarefa não encontrada!");
  error.status = 400;
  next(error);
});

app.use(router);
/*------------------------------------------------------------------*/
app.use((err, req, res, next) => {
  const statusCode = 400;
  
  const mensagem = "Tarefa não encontrada!";
  
  console.error(err);
  
  res.status(statusCode).json({
    erro: {
      mensagem: mensagem,
    },
  });
});

app.listen(3000, () => {
  console.log("App está ON!");
});

