const express = require('express')
var app = express();
const router = express.Router()
var jogo = require('../public/Models/tb_jogos');
var bodyParser = require('body-parser');




//rota para cadastro;
router.get('/cadastro-jogos', function (req, res){

    jogo.findAll().then(function (listaJogos){
        res.render('cadastro-jogos', { listaJogos: listaJogos });
    });
    
});


//rota responavel por mandar os dados para o banco de dados;
router.post('/add', (req, res) => {

    jogo.create({
        nome_jogo: req.body.nome,
        resumo_jogo: req.body.resumo,
        foto_jogo: req.body.foto,
        nota_jogo: 0
    });
    
    res.redirect('/admin/cadastro-jogos')
   
});


//rota para remover
router.post('/remove', (req, res) => {

    jogo.destroy({
        where: {
        id_jogo: req.body.idJogo
        }
    });

    res.redirect('/admin/cadastro-jogos')
    
});



module.exports = router