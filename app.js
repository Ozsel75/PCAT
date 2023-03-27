//npm init
//npm i express
//npm install --save-dev nodemon

const express = require("express")
const path = require("path")
const app = express()



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

app.get("/", (req, res)=>{

    res.sendFile(path.resolve(__dirname,"temp/index.html"))

    const photo = {
        id: 1,
        name: "Photo name",
        description: "Photo description"
    }

    res.send(photo)
})



const port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`)
})