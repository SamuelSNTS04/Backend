const express = require("express");
const router = express.Router();
const controller = require("../controllers/tarefaController");

router.get("/", controller.listarTarefas);

router.post("/", controller.criarTarefas);

router.get("/:id", controller.buscarTarefa, controller.listarTarefaId);

router.put("/:id", controller.buscarTarefa, controller.atualizarTarefa);

router.delete("/:id", controller.buscarTarefa, controller.deletarTarefa);

module.exports = router;
