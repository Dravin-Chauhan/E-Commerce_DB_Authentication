const express = require("express");
const router = express.Router();
const Product = require('../Models/Products');

router.post("/addProducts", async (req, res) => {
    const newProduct = new Product({
        name : req.body.name,
        thumbnail : req.body.thumbnail,
        product_gallery : req.body.product_gallery,
        description : req.body.description,
        base_price : req.body.base_price,
        sell_price : req.body.sell_price,
        category_name : req.body.category_name,
        tags : req.body.tags,
        additional_information : req.body.additional_information
    })
    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
