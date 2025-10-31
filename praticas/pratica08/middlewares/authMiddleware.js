const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ msg: "Não autorizado" });
  }

  try {
    const token = authorization.split(" ")[1];

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.payload = { usuario: payload.usuario };
    return next();
  } catch (err) {
    res.status(401).json({ msg: "Token inválido" });
  }
}

function gerarToken(payload) {
  const expiresIn = 120;

  try {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    return token;
  } catch (err) {
    throw Error("Erro ao gerar o token");
  }
}

module.exports = { verificarToken, gerarToken };
