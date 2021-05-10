const express= require('express');
//const path = require('path');

// modulo, peticiones en consola
const morgan = require('morgan');

//modulos mysql
const mysql = require('mysql');
const conexion = require('express-myconnection');

const app = express();

// Enlazar rutas
const juegosRutas = require('./rutas/juegos');

//************ revisar **************************
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

// configuracion sql
app.use(morgan('dev'));
app.use(conexion(mysql, {
	host: 'localhost',
	user: 'wernner',
	password: '1234Admin?',
	port: 3306,
	database: 'juegos'
}, 'single'));

app.use(express.urlencoded({extended: false}));

// utilizar rutas enlazadas
app.use('/', juegosRutas);

// *********************archivos de vista (static)
//app.use(express.static(path.join(__dirname, 'public')));

// puerto
// configuracion puerto
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
	console.log('Server online !!!');
});