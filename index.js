const express = require('express');
const routes = require('./backend/router/enrutador.router')
const path = require('path')
require('dotenv').config();

const app = express();
const logger = require('morgan');
app.use(logger('dev'));
app.set('view engine', 'ejs');
app.set('views', './frontend/views');
app.use(express.static(path.join(__dirname,'fontend/views/assets')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', routes);

app.post('/')

app.listen(process.env.PORT);