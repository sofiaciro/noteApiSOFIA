const mongoose =  require('mongoose')
const conexion = require("../config/database");

const usuarioSchema = new conexion.Schema({
    correo:{
        type: String,
        unique: [true, 'El correo ya existe'],
        required: true
    },
    pass:{
        type: String,
        required: [true, 'Debe registrarse con una contraseña'],
        minLength: [5, 'La contraseña debe tener minimo 5 caracteres'],
        maxLength: [20, 'La contraseña debe ser de menos de 20 caracteres']

    },
    rol:{
        type: String,
        default: "visit"
    },
    habilitado:{
        type: Boolean,
        default: true
    }
}, {
    versionKey: false 
});

const usuarioModel = conexion.model("Usuarios", usuarioSchema);
module.exports = usuarioModel;