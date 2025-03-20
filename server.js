const express = require('express');
const server = express();
const connectToDatabase= require("./db/config")
const routerLoging = require("./user/user_router")
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
    res.send("Primer Mensaje")
})


// Ruta para verificar la conexión a la base de datos
server.get("/verificar-conexion", async (req, res) => {
    try {
        const client = await connectToDatabase();
        const result = await client.db("admin").command({ ping: 1 });
        res.send("Conexión a la base de datos exitosa: " + JSON.stringify(result));
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
        res.status(500).send('Error al conectar a la base de datos');
    }
});

// Ruta para crear un usuario Login
server.post("/", routerLoging);

// Middleware para manejar errores 404
server.use((req, res, next) =>{
    let err = new Error("Resource not found")
    err.status = 404
    next(err)
})
// Middleware para manejar errores
server.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo salió mal!')
})


module.exports = server