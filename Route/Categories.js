const express = require("express");
const router = express.Router();
const Category = require('../Models/Categories');

router.post("/addCategories", async (req, res) => {
    const newCategory = new Category({
        name : req.body.name,
        slug : req.body.slug,
        image : req.body.image,
        description : req.body.description
    })
    try {
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
