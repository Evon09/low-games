//Import e config do express;
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql2');
var express = require('express');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
require('./auth')(passport);

var app = express();
app.use(express.static('public/views'));
app.use(express.static('public/views/css'));
app.use(express.static('public/views/img'));
app.use(express.static('public/Controller'));
app.use(express.static(__dirname + '/public'));

var sequelize = require('./public/Controller/bancoDeDados');

//ejs config
app.set('views','./public/views');
app.set('view engine', 'ejs');


//tb_jogos;
var jogo = require('./public/Models/tb_jogos');
var bodyParser = require('body-parser');


//body-parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//public 
    app.use(express.static(path.join(__dirname, 'public')))

//routes
const admin = require('./routes/admin');
const user = require('./routes/user');

//sesao
// app.use(session({
//     secret: 'sesao',
//     reseve: true,
//     saveUninitialized:true
// }))
// app.use(flash());
//midware
// app.use((req, res, next) => {
//         res.locals.msgCerto =req.flash("");
//     })

//rota admin/user;
app.use('/admin', admin);
app.use('/', user);

//inciar o servidor http://localhost:3000/
app.listen(9000, () => console.log('Aplicação executando na porta 9000!'));