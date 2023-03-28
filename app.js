//npm init
//npm i express
//npm install --save-dev nodemon
// npm i ejs
// npm start     başlatma  json scripts e "start": "nodemon app.js"  ekledik

const express = require("express")
const ejs = require("ejs")    //TEMPLATE ENGINE
const path = require("path")
const app = express()

//TEMPLATE ENGINE 
app.set("view engine", "ejs")

const myLogger = (req, res, next) => {
    console.log("middeleware log 1")
    next();
}

const myLogger2 = (req, res, next) => {
    console.log("middeleware log 2")
    next();
}
// MIDDLEWARES
app.use(express.static('public'))
app.use(myLogger)
app.use(myLogger2)


//ROUTES
app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/about", (req, res)=>{
    res.render("about")
})
app.get("/add", (req, res)=>{
    res.render("add")
})



const port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`)
})