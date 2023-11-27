const express = require("express");
const necesarioControllers = require('../Controllers/necesarioControllers')
const router = express.Router();

router.get("/:id_usuario", necesarioControllers.verNecesario);
router.put("/:id_usuario", necesarioControllers.cambiarEstatus);

module.exports = router
