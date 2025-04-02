const express = require('express'); 
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require("cors");
require('./db.js');

const server = express();
server.name = 'API';

// Configuración de middleware
server.use(cors({ origin: process.env.CORS_ORIGIN || '*' })); // Limita el origen en producción
server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

// Headers para CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Rutas principales
server.use('/', routes);

// Middleware para manejar errores
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(err);
  res.status(status).send({ error: message });
});

module.exports = server;