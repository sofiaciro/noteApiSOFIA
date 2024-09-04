const express = require('express');
const controllerClientes = require('../controller/clientes.controller');
const controllerPedidos = require('../controller/pedidos.controller');
const controllerProductos = require('../controller/productos.controller');
const controllerUsuarios = require('../controller/usuarios.controller');
const path = require('path');
const Usuario = require('../models/usuarios.model')
const { connection } = require('mongoose');

const route = express.Router();

route.get("/login", async (req, res) => {
    const loginUsuario = await controllerUsuarios.usuarioLogin()
    console.log(path.__dirname);
    res.render('pages/register', { loginUsuario });
});
route.get("/register", async (req, res) => {
    const nuevoUsuario = await controllerUsuarios.usuarioAgregado()
    console.log(path.__dirname);
    res.render('pages/register', { nuevoUsuario });
});
route.get("/catalogo", async (req, res) => {
    const listadoProductos = await controllerProductos.productoListar()
    console.log(path.__dirname);
    res.render('pages/catalogo', { listadoProductos });
});
route.get("/index", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/index');
});
route.get("/carrito", async (req, res) => {
    const listadoProductos = await controllerProductos.productoListar()
    console.log(path.__dirname);
    res.render('pages/carrito', { listadoProductos });
});


// Cliente
route.get('/clientes', controllerClientes.clientesListar);
route.get('/clientes/:ref', controllerClientes.clientesEncontrado);
route.post('/clientes', controllerClientes.clientesAgregado);
route.put('/clientes/:ref', controllerClientes.clientesEditado);
route.delete('/clientes/:ref', controllerClientes.clientesEliminado);

// Producto
route.get('/productos/', controllerProductos.productoListar);
route.get('/productos/:ref', controllerProductos.productoEncontrado);
route.post('/productos', controllerProductos.productoAgregado);
route.put('/productos/:ref', controllerProductos.productoEditado);
route.delete('/productos/:ref', controllerProductos.productoEliminado);


// Pedido
route.get('/pedidos', controllerPedidos.pedidoListar);
route.get('/pedidos/:ref', controllerPedidos.pedidoEncontrado);
route.post('/pedidos', controllerPedidos.pedidoAgregado);
route.put('/pedidos/:ref', controllerPedidos.pedidosEditado);
route.delete('/pedidos/:ref', controllerPedidos.pedidosEliminado);


// Usuario
route.get('/usuarios', controllerUsuarios.usuarioListar);
route.get('/usuarios/:ref', controllerUsuarios.usuarioEncontrado);
route.post('/usuarios', controllerUsuarios.usuarioAgregado);
route.put('/usuarios/:ref', controllerUsuarios.usuarioEditado);
route.delete('/usuarios/:ref', controllerUsuarios.usuarioEliminado);
route.post('/usuarios', controllerUsuarios.usuarioLogin);


module.exports = route
