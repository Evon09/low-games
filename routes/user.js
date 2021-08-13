//requires
var bodyParser = require('body-parser');
const classUser = require('../public/Models/userClass');
const bcrypt = require('bcryptjs');
const path = require('path');


//bd
const mongoose = require('mongoose');
require('../public/Models/tb_jogos');
require('../public/Models/tb_user');
const jogos = mongoose.model('gamedb');
const users = mongoose.model('userdb');


//express static
const express = require('express')
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../public/Models'));
const router = express.Router()



//index 
router.get('/', function (req, res) {
    
    jogos.find().then(function (listaJogos) {
        res.render('index', { listaJogos: listaJogos });
    });

});


//rotpara cada jogo
router.get('/jogo/:id', function (req, res) {

    
    jogos.findOne({ _id:req.params.id }).then(function (pagJogo) {
        
        res.render('jogos',{pagJogo: pagJogo}); 
    });
        
});


//rota para login
router.get('/login', function (req, res){

    
   res.render('login');

});


//cadastro usuario
router.get('/cadastro', function (req, res){
    
    res.render('cadastro');
 
});
 


//Rota que faz o cadastro
router.post("/cad-user", function (req, res) {


    const newUser = new classUser(req.body.nome, req.body.email, req.body.pass, 0);

    users.findOne({ email_user: req.body.email }).then((usuario) => {
        console.log(usuario);
        if (usuario) {

            console.log("EMAIL ja cadastrado");
            res.redirect('/cadastro');
           
        } else {
            
            if (newUser.hashpass()) {
                newUser.createUser();
                res.redirect('/login');
            } else {
                res.redirect('/cadastro');
            }
            
        }
       
    })


});

    
module.exports = router