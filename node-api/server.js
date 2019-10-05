const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//inicia o APP
const app = express();
app.use(express.json());
app.use(cors());

//Inicia o DB
mongoose.connect('mongodb://localhost:27017/QuebraGalhoApi', {useNewUrlParser: true}); 

// mongoose.Promise = global.Promise;

requireDir("./src/models");

app.use('/api', require('./src/routes'));

// requireDir('./controllers/AutenticacaoController')(app);

app.listen(3001);