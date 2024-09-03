const modelProducto = require("../models/productos.model")

exports.productoListar = async (req,res) =>{
    let listadoProductos = await modelProducto.find();
    if(listadoProductos)
        //res.status(200).json(listadoProductos);
        return listadoProductos
    else
        res.status(404).json({"error": "No se encontraron productos"});
};
exports.productoEncontrado = async (req,res) =>{
    let encontradoProducto = await modelProducto.findOne({referencias:req.params.ref});
    if(encontradoProducto)
        return listadoProductos
    else
        res.status(404).json({"error": "Productos no encontrado"});
};
exports.productoAgregado = async (req,res) =>{
    const nuevoProducto = {
        referencia: req.body.refeferenciaProducto,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen: req.body.imagenProducto,
        habilitado: true,
    };
    let Insercion = await modelProducto.create(nuevoProducto);
    if(Insercion)
        res.status(200).json({"mensaje": "bueno"});
    else
        res.status(404).json({"mensaje": "malo"});
};
exports.productoEditado = async (req,res) =>{
    const editadoProducto = {
        referencia: req.params.refeferenciaProducto,
        nombre: req.body.nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen: req.body.imagenProducto,
        habilitado: true,
    };
    let Actualizacion = await modelProducto.findOneAndUpdate({referencia:req.params.ref},editadoProducto);
    if(Actualizacion)
        res.status(200).json({"mensaje": "bueno"});
    else
        res.status(404).json({"mensaje": "malo"});
};
exports.productoEliminado = async (req,res) =>{
    console.log(req.params.id , req.body.referenciaProducto)
    let eliminacion = await modelProducto.findOneAndDelete({referencias:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje":"eliminacion exitosa"});
    else
        res.status(404).json({"mensaje": "error"});
};
