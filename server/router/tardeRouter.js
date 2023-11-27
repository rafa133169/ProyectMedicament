const express = require("express");
const tardeControllers = require('../Controllers/tardeControllers')
const router = express.Router();

router.get("/:id_usuario", tardeControllers.verRecetasTarde);
module.exports = router
