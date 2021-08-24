const path = require('path');
var bodyParser = require('body-parser');
const {adm_user} = require('../helpers/adm_user');
const multer = require('multer');
const upload = require('../app');
const express = require('express')
var app = express();
const router = express.Router()
const classJogo = require('../public/Models/gameClass');



//express statics
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/views/upload'));

//repository
const gameRepository = require('../Repository/games.js');
const postRepository = require('../Repository/posts');

//rota para cadastro;
router.get('/cadastro-jogos',adm_user, async (req, res) => {

    const gameList = await gameRepository.findAll();
    res.render('game-register', { gameList: gameList });
    
})

//rota responavel por mandar os dados para o banco de dados;
router.post('/add',adm_user,upload.single('photo'), (req, res) => {

    
    const NewGame = new classJogo(null,req.body.name,req.body.summary,req.file.originalname);

    NewGame.newGame();
    
    res.redirect('/admin/cadastro-jogos')
   
});


//rota para remover
router.post('/remove',adm_user, (req, res) => {

    gameRepository.removeGame(req.body.idGame);
    postRepository.removeAllPost(req.body.idGame);

    res.redirect('/admin/cadastro-jogos');

});


//rota para editar
router.post('/edit',adm_user, upload.single('photoEd'), (req, res) => {

    //const Newfoto = req.file.originalname;
    gameRepository.editGame(req.body.idEd, req.body.nameEd, req.body.summaryEd, req.file.originalname);

    res.redirect('/admin/cadastro-jogos')

    
});


module.exports = router