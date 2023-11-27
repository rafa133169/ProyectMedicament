const express = require("express");
const ViasControllers = require('../Controllers/viasControllers')
const router = express.Router();

router.get("/", ViasControllers.verVias);
module.exports = router
