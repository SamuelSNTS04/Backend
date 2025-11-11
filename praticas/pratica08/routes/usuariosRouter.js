const express = require("express");
const authMiddlware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  const gerarToken = authMiddlware.gerarToken({ usuario: req.body.usuario });
  res.status(200).json({ token: gerarToken });
});

router.post("/renovar", authMiddlware.verificarToken, (req, res) => {

  const gerarNovoToken = authMiddlware.gerarToken({ usuario: req.payload.usuario });
  res.status(200).json({ token: gerarNovoToken });
})

module.exports = router;
