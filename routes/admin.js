

const path = require('path');
const mongoose = require('mongoose');
require('../public/Models/tb_jogos');
const jogos = mongoose.model('gamedb');
require('../public/Models/postdb');
const postdb = mongoose.model('postdb');
var bodyParser = require('body-parser');
const {adm_user} = require('../helpers/adm_user');
const multer = require('multer');
const upload = require('../app');


const express = require('express')
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/views/upload'));
const router = express.Router()

//rota para cadastro;
router.get('/cadastro-jogos',adm_user, function (req, res) {

    jogos.find().then(function (listaJogos) {
        res.render('cadastro-jogos', { listaJogos: listaJogos });
    });
    
})

//rota responavel por mandar os dados para o banco de dados;
router.post('/add',adm_user,upload.single('foto'), (req, res) => {

    console.log(req.file.originalname);
    const newGame = {
        
        nome_game: req.body.nome,
        resumo_game: req.body.resumo,
        foto_game:  req.file.originalname,
        nota_game: 0
    }

    new jogos(newGame).save().then(() => {
        console.log('Salvo com sucesso');
    }).catch((err) => {
        console.log('[ERRO] jogo nao salvo');
    })

    
    res.redirect('/admin/cadastro-jogos')
   
});


//rota para remover
router.post('/remove',adm_user, (req, res) => {

    jogos.remove({ _id: req.body.idJogo }).then(() => {
        console.log('Jogo Deletado');
        
    });

    postdb.remove({ id_game: req.body.idJogo }).then(() => {
        
        console.log('Posts deletados');
        
    });

    res.redirect('/admin/cadastro-jogos');

    
});

//rota para editar
router.post('/edit',adm_user, upload.single('fotoEd'), (req, res) => {

    //const Newfoto = req.file.originalname;
    console.log(req.file.originalname);
    jogos.findOne({ _id: req.body.idEd }).then((jogo) => {
        
        jogo.nome_game = req.body.nomeEd;
        jogo.foto_game=  req.file.originalname,
        jogo.resumo_game = req.body.resumoEd;
        
        jogo.save().then(() => {
            
            console.log("Editado com sucesso");
            res.redirect('/admin/cadastro-jogos')
    
        }).catch((err) => {

            console.log("Erro:" + err);

        });
    }).catch((err) => {

        console.log("Erro:" + err);

    });



    
});



module.exports = router