//Import e config do express;
var express = require('express');
var fs = require('fs');
var http = require('http');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const flash = require('connect-flash');
require('./Database/gameDb');
const jogos = mongoose.model('gamedb');
const multer = require('multer');


//faz o upload da imagem
const storage = multer.diskStorage({
    
    destination: (req, file, cb) => {
        cb(null, __dirname + "/public/Views/upload")
    },

    filename: (req, file, cb) => {
        
        cb(null, file.originalname);

    }
});
const upload = multer({ storage });

module.exports = upload;

//express static
var app = express();
app.use(express.static('public/views'));
app.use(express.static('public/views/css'));
app.use(express.static('public/views/img'));
app.use(express.static('public/views/upload'));
app.use(express.static('public/Controller'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')))

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


//routes
const admin = require('./routes/admin');
const user = require('./routes/user');


//rota admin/user;
app.use('/admin', admin);
app.use('/', user);

//inciar o servidor http://localhost:9000/
app.listen(9000, () => console.log('Aplicação executando na porta 9000!'));