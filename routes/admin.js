var bodyParser = require('body-parser');


//bd
var jogo = require('../public/Models/tb_jogos');
const database = require('../public/Controller/bancoDeDados');

//express static files
const express = require('express')
var app = express();
const router = express.Router()


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

//rota para editar
router.post('/edit', (req, res) => {

    (async () => {

        const edit = await jogo.findByPk(req.body.idEd);
        edit.nome_jogo = req.body.nomeEd;
        edit.foto_jogo = req.body.fotoEd;
        edit.resumo_jogo = req.body.resumoEd;
        edit.save();
        console.log(req.body.idEd);
    
    })();

    res.redirect('/admin/cadastro-jogos')
    
});



module.exports = router