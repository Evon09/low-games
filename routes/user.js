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
const classJogo = require('../public/Models/jogoClass');
const classPost = require('../public/Models/postClass');

//bd
const mongoose = require('mongoose');
require('../Database/jogosDb');
require('../Database/userDb');
require('../Database/postDb');
const gamedb = mongoose.model('gamedb');
const users = mongoose.model('userdb');
const postdb = mongoose.model('postdb');


//express statics
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../public/Models'));


//index 
router.get('/', function (req, res) {
    
    
    gamedb.find().then(function (gamelist) {
        res.render('index', { gamelist: gamelist });
    });

});


//rotpara cada jogo
router.get('/jogo/:id', function (req, res) {

 
    if (req.user == null) {
            
        gamedb.findOne({ _id:req.params.id }).then(function (pagGame) {
            postdb.find({id_game:req.params.id }).then((posts) => {
                res.render('Game', { pagGame: pagGame, posts: posts, postUser: null });

            }).catch((err) => {
                console.log(err)
            });
                
        }).catch((err) => {
            console.log(err)
        });


        }else{

                gamedb.findOne({ _id: req.params.id }).then(function (pagGame) {
                    postdb.find({  id_game: req.params.id }).then((posts) => {
                        postdb.findOne({ id_user: req.user._id, id_game:req.params.id }).then((postuser) => {
                            res.render('Game', { pagGame: pagGame, posts: posts, postUser: postuser.id_user });

                        }).catch((err) => {

                            res.render('Game', { pagGame: pagGame, posts: posts, postUser: null });

                        })
                    
                    
                    });
                
                });
        }


});


router.post('/post-remove', (req, res) => {


    const classpost = new classPost(req.body.postId);

    const classjogo = new classJogo(req.body.id_game);
    
    classjogo.removeNote(req.body.note);

    classpost.removePost();

    res.redirect('/jogo/'+req.body.id_game )
    
    
});


router.post('/add-post', function (req, res) {

    const classjogo = new classJogo(req.body.id_game,null,null,null,req.body.note_game,req.body.rating,req.body.total);
    //console.log(req.body.id_game,req.body.nota_game,req.body.quantidade,req.body.notatotal);
    const newPost= {
        
        userName: req.user.userName,
        userNote: req.body.note,
        post: req.body.post,
        id_game: req.body.id_game,
        id_user:  req.user._id,
        
    }
    new postdb(newPost).save().then(() => {
        console.log('Post Salvo com sucesso');
    })
    
    classjogo.addNote(req.body.note);
    
    res.redirect('/jogo/' + req.body.id_game);
 
});


//rota para login
router.get('/login', function (req, res){

   res.render('login');

});


//cadastro usuario
router.get('/cadastro', function (req, res){
    
    res.render('cadastro');
 
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