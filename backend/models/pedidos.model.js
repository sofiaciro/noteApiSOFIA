const mongoose = require("../config/database");

const schemaPedido  = new mongoose.Schema({
    cliente: { 
        type: conexion.SchemaTypes.ObjectId
    },
    carrito: {
        any:[]
    },
    subtotal: {
        type: Number,
        default: [0, 'El subtotal por defecto es cero'], min: [0, 'El subtotal como mínimo es cero'],
    },
    impuesto: {
        type: Number,
        required: [true, 'Asignar un descuento o un impuesto'],
    },
    total: {
        type: Number,
        default: [0, 'El total por defecto es cero'],   
    },
    estado: {
        type: String,
        required: [true,],
        enum: ['creado', 'pagado','enviado','recibido','cancelado','finalizado'],
    },

});
const pedido = mongoose.model("pedido", schemaPedido);
module.exports = pedido;