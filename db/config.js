// filepath: /workspaces/AI en Docker/db/config.js
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('La variable de entorno MONGODB_URI no está definida');
}

mongoose.connect(uri, {
    
     
}).then(() => console.log("Conexión exitosa a MongoDB"))
  .catch(err => console.error("Error al conectar a MongoDB:", err));

module.exports = mongoose;
