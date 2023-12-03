const express = require("express");
const app = express()
const cors = require("cors");
const ejs = require("ejs");
const morgan = require("morgan");
require("./config/database");
const User = require("./models/user.model.js");


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
app.get("/Register", (req, res) => {    
    res.render("register");
});


//Register Post
app.post("/Register",async (req, res) => {  
    try {
        const user = await User.findOne({username: req.body.username});
        if(user){
            return res.status(400).send({ message: "User Already Exists" })
        }else{
            const newUser = new User({
                username: req.body.username,
                password: req.body.password,
            })
            await newUser.save();
            res.status(201).redirect("/Login");
        }
        res.status(201).send({ message: "User Created" })
    } catch (error) {
        res.status(500).send(error.message)
    } 
});


//Login Get
app.get("/Login", (req, res) => {    
    res.render("Login");
});
//Login Post
app.post("/Login", (req, res) => {  
    try {
        res.status(200).send({ message: "User Logged In" })
    } catch (error) {
        res.status(500).send(error.message)
    } 
});
//Profile ---Protected
app.get("/Profile", (req, res) => {    
    res.render("Profile");
});
//Logout Get
app.get("/Logout", (req, res) => {    
    res.redirect("/");
});
module.exports = app;