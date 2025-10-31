const express = require("express");
const authMiddlware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", (req, res) => {
  const token = authMiddlware.gerarToken({ email: req.email });
  res.status(200).json({ token: token });
});

module.exports = router;
