//Import e config do express;
var fs = require('fs');
var http = require('http');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
require('./auth')(passport);


//express static
var express = require('express');
var app = express();
app.use(express.static('public/views'));
app.use(express.static('public/views/css'));
app.use(express.static('public/views/img'));
app.use(express.static('public/Controller'));
app.use(express.static(__dirname + '/public'));



//bd
var sequelize = require('./public/Controller/bancoDeDados');
var mysql = require('mysql2');


//sesao
app.use(session({
    secret: 'sesao',
    reseve: true,
    saveUninitialized:true
}))
app.use(flash());


//ejs config
var ejs = require('ejs');
app.set('views','./public/views');
app.set('view engine', 'ejs');


//body-parsers
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//public estatic
app.use(express.static(path.join(__dirname, 'public')))


//routes
const admin = require('./routes/admin');
const user = require('./routes/user');


//rota admin/user;
app.use('/admin', admin);
app.use('/', user);

//inciar o servidor http://localhost:3000/
app.listen(9000, () => console.log('Aplicação executando na porta 9000!'));