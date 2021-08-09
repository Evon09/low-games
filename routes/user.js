const express = require('express')
var app = express();
const router = express.Router()
var jogo = require('../public/Models/tb_jogos');
var bodyParser = require('body-parser');




router.get('/', function (req, res) {
    
    jogo.findAll().then(function (listaJogos){
        res.render('index', { listaJogos: listaJogos });
    });

});


//rotpara cada jogo
router.get('/jogo/:id/:nome_jogo', function (req, res) {

    jogo.findByPk(req.params.id).then(function (listaJogos) {
       res.render('jogos',{listaJogos: listaJogos}); 
    });

   // res.send(req.params.id + req.params.nome_jogo);
});





//rota para login
router.get('/login', function (req, res){

   res.render('login');

});





module.exports = router