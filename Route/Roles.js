const express = require("express");
const router = express.Router();
const Roles = require('../Models/Roles');

//Insert Roles
router.post("/addRoles", async (req, res) => {
    const newRoles = new Roles({
        name : req.body.name,
        slug : req.body.slug
    })
    try {
        const savedRoles = await newRoles.save();
        res.status(201).json(savedRoles);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Get Roles Data
router.get("/getRoles", async (req, res) => {
    const data = await db.collection('Roles').find().toArray();
    console.log(data);
});

module.exports = router;
