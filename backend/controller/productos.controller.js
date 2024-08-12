const models = require("../models/productos.model")

const productoListar = async (req,res) =>{
    let listadoProductos = await modelProducto.find();
    if(listadoProductos)
        res.status(200).json(listadoProductos);
    else
        res.status(404).json({"error": "No se encontraron productos"});
};
const productoEncontrado = async (req,res) =>{
    let encontradoProducto = await modelProducto.findOne({referencias:req.params.ref});
    if(encontradoProducto)
        res.status(200).json(encontradoProducto);
    else
        res.status(404).json({"error": "Productos no encontrado"});
};
const productoAgregado = async (req,res) =>{
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
