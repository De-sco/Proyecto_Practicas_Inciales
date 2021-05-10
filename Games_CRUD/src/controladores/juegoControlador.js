const controlador = {};

controlador.crear = (req, res) => {
    res.send('agregar juego')
}

controlador.eliminar = (req, res) =>{
    res.send('eliminar juego')
}

controlador.actualizar = (req, res) =>{
    res.send('actualizar juego')
}

controlador.vista = (req, res) =>{
    res.send('ver juegos')
}

module.exports = controlador;