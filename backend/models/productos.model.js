const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
    referencia:{
        typr: String,
        required: [true, 'La referencia es Obligatoria'],
    },
    nombre: {
        type: String,
        required: [true, 'Asignar un nombre es obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
    },
    precio: {
        type: Number,
        default: [0, 'por defecto el precio es 0'],
        min: [0, 'El precio minimo es 0'],
    },
    stock: {
        type: Number,
        default: [0, 'por defecto el stock es 0'],
        min: [0, 'El stock minimo es 0'],
    },
    imagen: {
        type: String,
        required: [true, 'No existe imagen o ruta por defecto'],
    },
    habilitado: {
        type: Boolean,
        default: true,
    },
})

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;