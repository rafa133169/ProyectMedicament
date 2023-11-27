const express = require("express");
const nocheControllers = require('../Controllers/nocheControllers')
const router = express.Router();

router.get("/:id_usuario", nocheControllers.verRecetasNoche);
module.exports = router
