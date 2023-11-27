const express = require("express");
const morningControllers = require('../Controllers/morningControllers')
const router = express.Router();

router.get("/:id_usuario", morningControllers.verRecetasMorning);
router.put("/:id_usuario",morningControllers.NuevaToma)
module.exports = router
