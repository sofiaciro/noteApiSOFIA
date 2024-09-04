const express = require('express');
const controllerClientes = require('../controller/clientes.controller');
const controllerPedidos = require('../controller/pedidos.controller');
const controllerProductos = require('../controller/productos.controller');
const controllerUsuarios = require('../controller/usuarios.controller');
const path = require('path');

const route = express.Router();

// Login
route.get("/login", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/login');
});

// Register
route.get("/register", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/register');
});

// Index
route.get("/index", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/index');
});

// Inventario
route.get("/inventario", async (req, res) => {
    const listadoProductos = await controllerProductos.productoListar()
    console.log(path.__dirname);
    res.render('pages/inventario/inventario', { listadoProductos });
});
route.get("/editar_inventario", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/inventario/editar_inventario');
});

// Catalogo
route.get("/catalogo", async (req, res) => {
    const listadoProductos = await controllerProductos.productoListar()
    console.log(path.__dirname);
    res.render('pages/catalogo', { listadoProductos });
});

// Carrito
route.get("/carrito", function (req, res) {
    console.log(path.__dirname);
    res.render('pages/carrito');
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


module.exports = route
