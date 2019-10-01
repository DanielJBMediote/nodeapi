const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const products = await Product.find();
        
        return res.json(products);
    },

    async store(req, res) {

        // Product.create({
        //     title: "Produto 2",
        //     description: "Descrição texto texto texo",
        //     url: "url aqui"
        // });

        return res.json({
            "OK":true
        })
    }
};