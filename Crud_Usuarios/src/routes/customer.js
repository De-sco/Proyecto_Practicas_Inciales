const express = require('express');
const router = express.Router();

const customerController = require("../contollers/customerControlers")

router.get('/', customerController.list);
router.post('/Crear',customerController.guardar)
router.post('/entrar',customerController.entrar)


module.exports = router;