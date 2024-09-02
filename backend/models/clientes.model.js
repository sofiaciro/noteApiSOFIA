const mongoose = require("../config/database");

const schemaCliente = new mongoose.Schema({
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
        default: [0, 'por defecto el precio es 0'],
        min: [0, 'El precio minimo es 0'],
    },
    habilitado: {
        type: Number,
        default: [0, 'por defecto el stock es 0'],
        min: [0, 'El stock minimo es 0'],
    },
    usuario: {
        type: String,
        required: [true, 'No existe imagen o ruta por defecto'],
    },
})

const cliente = mongoose.model("cliente", schemaCliente);
module.exports = cliente;