const exp = require("express");
const app = exp();

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json())

app.listen(9090, (process.env.PORT, () => {
    console.log("servidor en linea");
}));
app.set('view engaine', 'ejs');
const path = require('path');
app.set('view', path.join(__dirname, './frontend/views'));

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