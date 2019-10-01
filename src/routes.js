const express = require('express');
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

// Rota para criar Produto
routes.get("/products", ProductController.index);
routes.post("/productsNew", ProductController.store);

module.exports = routes;