const express = require('express');
const controllerClientes = require('../controller/clientes.controller');
const controllerPedidos = require('../controller/pedidos.controller');
const controllerProductos = require('../controller/productos.controller');
const controllerUsuarios = require('../controller/usuarios.controller');
const path = require('path');
const stripe = require("stripe")(process.env.STRIPEKEY);

const route = express.Router();

// STRIPE
const calculateOrderAmount = (items) => {
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    let total = 0;
    items.forEach((item) => {
      total += (item.precio * item.cantidad);
    });
    return total;
  };
  
  route.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
    dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
  });
});
route.get('/checkout', async (req, res) => {
    res.render('pages/checkout')
  });

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
route.get("/checkout", function (req, res) {
  console.log(path.__dirname);
  res.render('pages/checkout');
});

// Inventario
route.get("/inventario", async (req, res) => {
    const listadoProductos = await controllerProductos.productoListar()
    console.log(path.__dirname);
    res.render('pages/inventario/inventario', { listadoProductos });
});
route.post("/inventario/:ref", async (req, res) => {
    await controllerProductos.productoEditado(req, res)
    console.log();
    
});
route.get("/editar_inventario/:ref", async (req, res) =>{
    // console.log(req.params);
    const encontradoProducto = await controllerProductos.productoEncontrado(req, res);
    // console.log(path.__dirname);
    res.render('pages/inventario/editar_inventario',{ producto : encontradoProducto });
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
