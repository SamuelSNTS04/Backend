const express = require("express");

//middleware de rota
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Chegou aqui");
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).send("Inserido com sucesso");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id == 1) {
    return res.send("Achei");
  } else {
    throw Error("Não achei");
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  if (id == 1) {
    res.send("Tarefa altareda");
  } else {
    res.status(404).send("Tarefa não encontrada");
  }
});

router.delete("/:id", (req, res) => {
  res.status(204).end(); // delete retorna 204 - sem corpo... send retorna um corpo
});

module.exports = router;