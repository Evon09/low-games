//Import e config do express;
var express = require('express');
var fs = require('fs');
var http = require('http');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');


//express static

var app = express();
app.use(express.static('public/views'));
app.use(express.static('public/views/css'));
app.use(express.static('public/views/img'));
app.use(express.static('public/Controller'));
app.use(express.static(__dirname + '/public'));



//bd
const mongoose = require('mongoose');
require('./public/Models/tb_user');
//const usersdb = mongoose.model('userdb');


//sesao
app.use(session({
    secret: 'segredo',
    reseve: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
require('./config/auth')(passport);
app.use(flash())

// Middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.user = req.user|| null;
    //console.log(req.user);
    next();
});



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