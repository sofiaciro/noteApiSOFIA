const models = require("../models/productos.model")

exports.usuarioListar = async (req,res) =>{
    let listadoUsuarios = await modelUsuario.find();
    if(listadoUsuarios)
        res.status(200).json(listadoUsuarios);
    else
        res.status(404).json({"error": "No se encontraron usuario"});
};
exports.usuarioEncontrado = async (req,res) =>{
    let encontradoUsuario = await modelUsuario.findOne({referencias:req.params.ref});
    if(encontradoUsuario)
        res.status(200).json(encontradoUsuario);
    else
        res.status(404).json({"error": "Usuario no encontrado"});
};
exports.usuarioAgregado = async (req,res) =>{
    const nuevoUsuario = {
        referencia: req.params.refeferenciaUsuario,
        correo: req.body.correoUsuario,
        pass: req.body.passUsuario,
        rol: req.body.rolUsuario,
        habilitado: true,
    };
    let Insercion = await modelUsuario.create(nuevoUsuario);
    if(Insercion)
        res.status(200).json({"mensaje": "bueno"});
    else
        res.status(404).json({"mensaje": "malo"});
};
exports.usuarioEditado = async (req,res) =>{
    const editadoUsuario = {
        referencia: req.params.refeferenciaUsuario,
        correo: req.body.correoUsuario,
        pass: req.body.passUsuario,
        rol: req.body.rolUsuario,
        habilitado: true,
    };
    let Actualizacion = await modelUsuario.findOneAndUpdate({referencia:req.params.ref},editadoUsuario);
    if(Actualizacion)
        res.status(200).json({"mensaje": "bueno"});
    else
        res.status(404).json({"mensaje": "malo"});
};
exports.usuarioEliminado = async (req,res) =>{
    console.log(req.params.id , req.body.referenciaUsuario)
    let eliminacion = await modelUsuario.findOneAndDelete({referencias:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje":"eliminacion exitosa"});
    else
        res.status(404).json({"mensaje": "error"});
};
