const express = require("express");
const mediodiaControllers = require('../Controllers/medioDiaControllers')
const router = express.Router();

router.get("/:id_usuario", mediodiaControllers.verRecetasMediodia);
module.exports = router
