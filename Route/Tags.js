const express = require("express");
const router = express.Router();
const Tags = require('../Models/Tags');

router.post("/addTags", async (req, res) => {
    const newSlug = new Tags({
        name : req.body.name,
        slug : req.body.slug
    })
    try {
        const savedSlug = await newSlug.save();
        res.status(201).json(savedSlug);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
