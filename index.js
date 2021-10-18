const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotEnv = require('dotenv');

dotEnv.config();
const Users = require('./Route/Users');
const Roles = require('./Route/Roles');
const Categories = require('./Route/Categories');
const Tags = require('./Route/Tags');
const Products = require('./Route/Products');


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connection successfull");
}).catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use("/", Users);
app.use("/", Roles);
app.use("/", Categories);
app.use("/", Tags);
app.use("/", Products);

app.listen(5000, () => {
    console.log("Server is started at 5000 port");
});