const express = require('express');
const controllerClientes = require('../controller/clientes.controller');
const controllerPedidos = require('../controller/pedidos.controller');
const controllerProductos = require('../controller/productos.controller');
const controllerUsuarios = require('../controller/usuarios.controller');

const route = express.Router();

// Cliente
route.get('/clientes', controllerClientes.clientesListar);
route.get('/clientes', controllerClientes.clientesEncontrado);
route.get('/clientes', controllerClientes.clientesAgregado);
route.get('/clientes', controllerClientes.clientesEditado);
route.get('/clientes', controllerClientes.clientesEliminado);

// Producto
route.get('/productos', controllerPedidos.productoListar);
route.get('/productos', controllerPedidos.productoEncontrado);
route.get('/productos', controllerPedidos.productoAgregado);
route.get('/productos', controllerPedidos.productoEditado);
route.get('/productos', controllerPedidos.productoEliminado);


// Pedido
route.get('/pedidos', controllerProductos.pedidoListar);
route.get('/pedidos', controllerProductos.pedidoEncontrado);
route.get('/pedidos', controllerProductos.pedidoAgregado);
route.get('/pedidos', controllerProductos.pedidosEditado);
route.get('/pedidos', controllerProductos.pedidosEliminado);


// Usuario
route.get('/usuarios', controllerUsuarios.usuarioListar);
route.get('/usuarios', controllerUsuarios.usuarioEncontrado);
route.get('/usuarios', controllerUsuarios.usuarioAgregado);
route.get('/usuarios', controllerUsuarios.usuarioEditado);
route.get('/usuarios', controllerUsuarios.usuarioEliminado);


module.exports = route
/* app.set('view engaine', 'ejs');
const path = require('path');
app.set('views', path.join(__dirname, './frontend/views'));

app.get("/index", function(req,res){
    console.log(path.__dirname);
    res.render('pages/index');
});
app.get("/login", function(req,res){
    console.log(path.__dirname);
    res.render('pages/login');
});app.get("/catalogo", function(req,res){
    console.log(path.__dirname);
    res.render('pages/catalogo');
});
app.listen(process.env.PORT, () => {
    console.log("servidor en linea");
});
*/
