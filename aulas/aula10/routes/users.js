const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

/* GET users listing. */
router.post("/login", function (req, res) {
  const { username, password } = req.body;

  if (
    username === "samuel.s.magalhaes@iesb.edu.br" &&
    password === "abcd1234"
  ) {
    const payload = {
      iss: "Minha API",
      aud: "Você",
      email: username,
      nome: "samuel",
    };

    try {
      res.json({ token: auth.gerarToken(payload) });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  }

  return res.status(401).json({ msg: "Credenciais inválidas" });
});

router.post("/renovar", auth.verificarToken, auth.renovartoken);

module.exports = router;
