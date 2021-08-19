//requires
var bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const path = require('path');
const passport = require('passport');
const express = require('express')
var app = express();
const router = express.Router();


//Models Class
const classUser = require('../public/Models/userClass');
const classJogo = require('../public/Models/gameClass');


//bd
const mongoose = require('mongoose');
require('../Database/gameDb');
require('../Database/userDb');
require('../Database/postDb');
const gamedb = mongoose.model('gamedb');
const users = mongoose.model('userdb');
const postdb = mongoose.model('postdb');


const postRepository = require('../Repository/posts');
const gameRepository = require('../Repository/games.js');


//express statics
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../public/Models'));


//index 
router.get('/', async (req, res) => {
    
    
    const gameList = await gameRepository.findAll();
    
    res.render('index', { gamelist: gameList });
   

});


//rotpara cada jogo
router.get('/jogo/:id', async (req, res) => {

 
    if(req.user == null) {
            
        const game = await gameRepository.findGame(req.params.id);
        const posts = await postRepository.findAll(req.params.id);

        res.render('Game', { pagGame: game, posts: posts, postUser: null });

    }else{
        
        const game = await gameRepository.findGame(req.params.id);
        const posts = await postRepository.findAll(req.params.id);
        const postUser = await postRepository.findPost(req.user._id, req.params.id);
        
        res.render('Game', { pagGame: game, posts: posts, postUser: postUser});
                            
    }


});


router.post('/post-remove', (req, res) => {

    
    
    postRepository.removePost(req.body.postId);
    const classjogo = new classJogo(req.body.id_game);

    classjogo.calScore();

    res.redirect('/jogo/'+req.body.id_game )
    
    
});


router.post('/add-post', function (req, res) {


    const newPost= {
        
        userName: req.user.userName,
        userScore: req.body.Score,
        post: req.body.post,
        id_game: req.body.id_game,
        id_user:  req.user._id,
        
    }

    postRepository.addPost(newPost);

    const classjogo = new classJogo(req.body.id_game);
    classjogo.calScore();
    // classjogo.addScore(req.body.Score);
    
    res.redirect('/jogo/' + req.body.id_game);
 
});


//rota para login
router.get('/login', function (req, res){

   res.render('login');

});


//cadastro usuario
router.get('/user-register', function (req, res){
    
    res.render('user-register');
 
});
 

router.get('/logout', function (req, res) {
    
    req.logout();
    res.redirect('/');


});


//rota para logar usuario
router.post('/login-user', function (req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
});


//Rota que faz o cadastro
router.post("/cad-user", function (req, res) {


    const newUser = new classUser(req.body.nome, req.body.email, req.body.pass, 0);

    users.findOne({ email_user: req.body.email }).then((usuario) => {
        //console.log(usuario);
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