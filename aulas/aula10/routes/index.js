const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

/* GET home page. */
router.get('/', auth.verificarToken, function(req, res, next) {
  res.json("API esta on");
});

module.exports = router;
