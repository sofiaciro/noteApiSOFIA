const models = require("../models/clientes.model")

 exports.clientesListar = async (req,res) =>{
    let listadoClientes = await modelCliente.find();
    if(listadoClientes)
        res.status(200).json(listadoClientes);
    else
        res.status(404).json({"error": "No se encontraron ningun cliente"});
};
exports.clientesEncontrado = async (req,res) =>{
    let encontradoCliente = await encontradoCliente.findOne({referencias:req.params.ref});
    if(encontradoCliente)
        res.status(200).json(encontradoCliente);
    else
        res.status(404).json({"error": "cliente no encontrado"});
};
exports.clientesAgregado = async (req,res) =>{
    const nuevoProducto = {
        referencia: req.body.refeferenciaProducto,
        nombre: req.body.nombreCliente,
        telefono: req.body.telefonoCliente,
        direccion: req.body.direccionCliente,
        habitacion: req.body.habitacionCliente,
        usuario: true,
    };
    let Insercion = await modelProducto.create(nuevoProducto);
};
exports.clientesEditado = async (req,res) =>{
    const editadoCliente = {
        referencia: req.body.refeferenciaProducto,
        nombre: req.body.nombreCliente,
        telefono: req.body.telefonoCliente,
        direccion: req.body.direccionCliente,
        habitacion: req.body.habitacionCliente,
        usuario: true,
    };
    let Actualizacion = await modelCliente.findOneAndUpdate({referencia:req.params.ref},editadoCliente);
    if(Actualizacion)
        res.status(200).json({"mensaje": "bueno"});
    else
        res.status(404).json({"mensaje": "malo"});
};
exports.clientesEliminado = async (req,res) =>{
    console.log(req.params.id , req.body.referenciaProducto)
    let eliminacion = await modelCliente.findOneAndDelete({referencias:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje":"eliminacion exitosa"});
    else
        res.status(404).json({"mensaje": "error"});
};
