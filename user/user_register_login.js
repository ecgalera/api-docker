const mongoose = require("mongoose");

// Creamos un Schema de Mongodb usando el constructor de mongoose
const Schema = mongoose.Schema;

// Creamos una instancia del Schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Mover timestamps fuera de la definición de los campos
});

// Creamos un modelo de Mongodb usando el Schema
const User = mongoose.model('User', UserSchema);

module.exports = User;