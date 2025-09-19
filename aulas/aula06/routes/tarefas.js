const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefaController");

router.get("/", controller.listarTarefas);

router.post("/", controller.criarTarefas);

router.get("/:id", controller.listarTarefaId);

router.put("/:id", controller.alterarTarefa);

router.delete("/:id", controller.deletarTarefa);

module.exports = router;
