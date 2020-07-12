const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi');

//Import Models
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'))

//Port
app.listen(3000);

