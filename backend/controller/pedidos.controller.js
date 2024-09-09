const modelPedido = require("../models/pedidos.model")

exports.pedidoListar = async (req,res) =>{
    let listadoPedidos = await modelPedido.find();
    if(listadoPedidos)
        res.status(200).json(listadoPedidos);
    else
        res.status(404).json({"error": "No se encontraron productos"});
};
exports.pedidoEncontrado = async (req,res) =>{
    let encontradoPedidos = await modelPedido.findOne({referencias:req.params.ref});
    if(encontradoPedidos)
        res.status(200).json(encontradoPedidos);
    else
        res.status(404).json({"error": "Pedido no encontrado"});
};
exports.pedidoAgregado = async (req,res) =>{
    const nuevoPedido = {
        referencia: req.params.referenciaPedido,
        cliente: req.body.clientePedido,
        carrito: req.body.carritoPedido,
        subtotal: req.body.subtotalPedido,
        impuesto: req.body.impuestoPedido,
        total: req.body.totalPedido,
        estado: true,
    };
    let Insercion = await modelPedido.create(nuevoPedido);
    if(Insercion)
        res.status(200).json({"mensaje": "bueno"});
    else
        res.status(404).json({"mensaje": "malo"});
};
exports.pedidosEditado = async (req,res) =>{
    const editadoPedido = {
        referencia: req.params.referenciaPedido,
        cliente: req.body.clientePedido,
        carrito: req.body.carritoPedido,
        subtotal: req.body.subtotalPedido,
        impuesto: req.body.impuestoPedido,
        total: req.body.totalPedido,
        estado: true,
    };
    let Actualizacion = await modelPedido.findOneAndUpdate({referencia:req.params.ref},editadoPedido);
    if(Actualizacion)
        res.status(200).json({"mensaje": "bueno"});
    else
        res.status(404).json({"mensaje": "malo"});
};
exports.pedidosEliminado = async (req,res) =>{
    console.log(req.params.id , req.body.referenciaPedido)
    let eliminacion = await modelProducto.findOneAndDelete({referencias:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje":"eliminacion exitosa"});
    else
        res.status(404).json({"mensaje": "error"});
};
