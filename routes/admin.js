const path = require('path');
var bodyParser = require('body-parser');
const {adm_user} = require('../helpers/adm_user');
const multer = require('multer');
const upload = require('../app');
const express = require('express')
var app = express();
const router = express.Router()
const classJogo = require('../public/Models/gameClass');
const classPost = require('../public/Models/postClass');


//express statics
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/views/upload'));

//db
const mongoose = require('mongoose');
require('../Database/gameDb');
const gamedb = mongoose.model('gamedb');
require('../Database/postDb');
const postdb = mongoose.model('postdb');


//rota para cadastro;
router.get('/cadastro-jogos',adm_user, function (req, res) {

    gamedb.find().then(function (gameList) {
        res.render('game-register', { gameList: gameList });
    });
    
})

//rota responavel por mandar os dados para o banco de dados;
router.post('/add',adm_user,upload.single('photo'), (req, res) => {

    
    const newGame = {
        
        name: req.body.name,
        summary: req.body.summary,
        photo:  req.file.originalname,
        Score: 0,
        rating: 0,
    }

    new gamedb(newGame).save().then(() => {
        console.log('Salvo com sucesso');
    }).catch((err) => {
        console.log( err + '-->[ERRO] jogo nao salvo');
    })

    
    res.redirect('/admin/cadastro-jogos')
   
});


//rota para remover
router.post('/remove',adm_user, (req, res) => {


    const classjogo = new classJogo(req.body.idGame);
    const classpost = new classPost(null, null, null, req.body.idGame);

    classjogo.removeGame();

    classpost.removeAllPost();

    res.redirect('/admin/cadastro-jogos');

    
});


//rota para editar
router.post('/edit',adm_user, upload.single('photoEd'), (req, res) => {

    //const Newfoto = req.file.originalname;

    const classjogo = new classJogo(req.body.idEd,req.body.nameEd,req.body.summaryEd,req.file.originalname);

    classjogo.editGame();


    res.redirect('/admin/cadastro-jogos')

    
});


module.exports = router