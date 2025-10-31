const express = require('express');
const authMiddlware = require('../middlewares/authMiddleware');
const router= express.Router();

router.get("/", authMiddlware.verificarToken, (req, res) => {
    res.json([]);
});

module.exports = router;