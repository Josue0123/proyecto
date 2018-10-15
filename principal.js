var express = require('express');
var path = require('path');//librería para controlar rutas
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var lessmiddleware = require('less-middleware');
var passport = require('passport');
var morgan = require('morgan');
var pug = require('pug');
var subdomain = require('express-subdomain');

var app = express();
var db = require('./api/index');

db.sequelize.sync({force:true})
  .then(()=> console.log("Sincronizando"))
  .catch(() => console.log("No se puedo sincronizar"));

//Configurando motores de plantillas, en este caso usamos pug
//app.engine('pug', pug);
app.set('views', path.join(__dirname, 'app/'));
app.set('view engine', 'pug');

//Añadiendo el Middleware a los archivos
app.use(lessmiddleware(__dirname+'/app/'));
app.use(express.static(path.join(__dirname, 'app')));//aqui viene el res.render

//Configurando el body parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());

app.use(morgan('dev'));
app.use(session({
    name: 'control_usuario_id',
    secret: 'asdfasdfasdf',
    saveUninitialized: true,
    resave: true,
    store: new FileStore()
  }));


//importanto rutas de las vistas
app.use('/', require('./page/main.router'));//importo la variable router del archivo main router
//app.use('/', require('./page/admin.router'));
app.use(subdomain('admin', require('./page/admin.router')));//importo la variable router del archivo admin.router
app.use(subdomain('api', require('./api/rutas/emplado.router')));
module.exports = app;