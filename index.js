const express = require('express');
const routes = require('./backend/router/enrutador.router')
require('dotenv').config();

const app = express();
const logger = require('morgan');
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', './frontend/views');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', routes);

app.post('/')

app.listen(process.env.PORT);