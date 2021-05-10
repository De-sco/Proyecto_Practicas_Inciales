const express = require('express');
const router = express.Router();

const juegoControlador = require('../controladores/juegoControlador');

router.get('/create', juegoControlador.crear);
router.get('/delete', juegoControlador.eliminar);
router.get('/update', juegoControlador.actualizar);
router.get('/gamesList', juegoControlador.vista);

module.exports = router;