const express = require("express");
const usuarioControllers = require("../Controllers/usuarioControllers");
const router = express.Router();

router.post("/", usuarioControllers.agregarUsuario);

module.exports = router