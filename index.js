const express = require("express")
require("dotenv").config()
const port = process.env.PORT || 3030



const server = express()
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.listen(port, (err)=>{
    err? console.log(`Error: ${err}`) : console.log(`Corriendo en http://localhost:${port}`)
})


