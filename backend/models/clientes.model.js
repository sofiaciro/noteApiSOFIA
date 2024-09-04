const mongoose =  require('mongoose')
const conexion = require("../config/database");

const schemaCliente = new conexion.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        maxLength: [150,'El nombre completo es muy extenso'],
        minLength: [8, 'El nombre completo es muy corto'],
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
        maxLength: [14,'El telefono completo es muy extenso'],
        minLength: [9, 'El telefono completo es muy corto'],
    },
    direccion: {
        type: String,
    },
    habilitado:{
        type: Boolean,
        default: true
    },
    usuario: {
        type: String,
        required: [true, 'No existe imagen o ruta por defecto'],
    },
})

const cliente = conexion.model("cliente", schemaCliente);
module.exports = cliente;