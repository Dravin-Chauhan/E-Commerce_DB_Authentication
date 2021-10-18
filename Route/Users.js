const express = require("express");
const router = express.Router();
const User = require('../Models/Users');
const CryptoJS = require('crypto-js');

//Registration
router.post("/register", async (req, res) => {
    const newUser = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD).toString(),
        role : req.body.role,
        profile : req.body.profile
    })
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


//Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email : req.body.email});
        !user && res.status(401).json("Wrong Credentials");

        const hashPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD );
        const mainPassword = hashPassword.toString(CryptoJS.enc.Utf8);
        mainPassword !== req.body.password && res.status(401).json("Wrong Credentials");

        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }
    catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;