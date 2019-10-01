const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");


const PORT = 3000;
const HOST = "0.0.0.0";

// Inicializando projeto
const app = express();


const uri = "mongodb://mongodb:27017/nodesapi";


// Inicializando BD
mongoose.connect(uri).then(
  () => {console.log("Conectado com MongoDB")},
  err => {console.log(err)}
);

requireDir("./src/models");

// Rotas
app.use('/api', require("./src/routes"));

app.listen(PORT, HOST);
