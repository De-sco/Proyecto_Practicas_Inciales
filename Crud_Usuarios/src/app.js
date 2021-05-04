const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importando rutas
const customerRoutes = require('./routes/customer');

app.set('port', process.env.PORTO || 3000);

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'contra',
  port: 3306,
  database: 'CrudUsuarios'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), ()=> {
    console.log('Server on port 3000');
});