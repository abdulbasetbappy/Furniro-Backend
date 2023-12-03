const express = require("express");
const app = express()
const cors = require("cors");
const ejs = require("ejs");
const morgan = require("morgan");


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.set('view engine', 'ejs');

//Base Route
app.get("/", (req, res) => {
    res.render("index");
});	
//Register Get
app.get("/", (req, res) => {    
    res.render("register");
});
//Register Post
//Login Get
//Login Post

//Profile ---Protected
module.exports = app;