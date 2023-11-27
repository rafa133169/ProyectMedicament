const express = require("express");
const medidaControllers = require('../Controllers/unidadMedidaControllers')
const router = express.Router();

router.get("/", medidaControllers.verMedida);
module.exports = router
