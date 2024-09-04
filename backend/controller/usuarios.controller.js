const modelUsuario = require("../models/productos.model")

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
        referencia: req.body.referenciaUsuario,
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

// Manejar el login de usuarios
//exports.usuarioLogin = async (req, res) => {
/*    const { correo, pass } = req.body;

    try {
        if (!correo || !pass) {
            return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
        }

        let usuario = await modelUsuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(pass, usuario.pass);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Credenciales inválidas' });
        }

        const payload = { usuario: { id: usuario.id } };
        jwt.sign(payload, config.jwtSecret, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error en el servidor' });
    }
};*/