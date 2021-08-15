//requires
var bodyParser = require('body-parser');
const classUser = require('../public/Models/userClass');
const classJogo = require('../public/Models/jogoClass');
const bcrypt = require('bcryptjs');
const path = require('path');
const passport = require('passport');
const express = require('express')
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../public/Models'));
const router = express.Router()

//bd
const mongoose = require('mongoose');
require('../Database/jogosDb');
require('../Database/userDb');
require('../Database/postDb');
const jogos = mongoose.model('gamedb');
const users = mongoose.model('userdb');
const postdb = mongoose.model('postdb');


//index 
router.get('/', function (req, res) {
    
    
    jogos.find().then(function (listaJogos) {
        res.render('index', { listaJogos: listaJogos });
    });

});


//rotpara cada jogo
router.get('/jogo/:id', function (req, res) {

 
    if (req.user == null) {
            
        jogos.findOne({ _id:req.params.id }).then(function (pagJogo) {
            postdb.find({id_game:req.params.id }).then((posts) => {
                res.render('jogos', { pagJogo: pagJogo, posts: posts, postuser: null });

            }).catch((err) => {
                console.log(err)
            });
                
        }).catch((err) => {
            console.log(err)
        });


        }else{

                jogos.findOne({ _id: req.params.id }).then(function (pagJogo) {
                    postdb.find({  id_game: req.params.id }).then((posts) => {
                        postdb.findOne({ id_user: req.user._id, id_game:req.params.id }).then((postuser) => {
                            res.render('jogos', { pagJogo: pagJogo, posts: posts, postuser: postuser.id_user });

                        }).catch((err) => {

                            res.render('jogos', { pagJogo: pagJogo, posts: posts, postuser: null });

                        })
                    
                    
                    });
                
                });
        }


});

router.post('/post-remove', (req, res) => {

    
    jogos.findOne({ _id: req.body.id_game }).then((jogo) => {
        
        jogo.nota_game = (jogo.notaTotal - req.body.nota)/(jogo.quantidade-1);
        jogo.quantidade = jogo.quantidade-1;
        jogo.notaTotal = jogo.notaTotal - req.body.nota;
       

        jogo.save().then(() => {

            console.log("Editado com sucesso");

        }).catch((err) => {
            console.log("-->"+err)
        });
    }).catch((err) => {
        console.log("-->"+err)
    });

    postdb.remove({ _id: req.body.postId }).then(() => {

        console.log('Post deletado');
        
    }).catch((err) => {
        console.log("-->"+err)
    });

    res.redirect('/jogo/'+req.body.id_game )
    
    
});



router.post('/add-post', function (req, res) {

    const classjogo = new classJogo(req.body.id_game,req.body.nota_game,req.body.quantidade,req.body.notatotal);
    //console.log(req.body.id_game,req.body.nota_game,req.body.quantidade,req.body.notatotal);
    const newPost= {
        
        nome_user: req.user.nome_user,
        nota: req.body.nota,
        post: req.body.post,
        id_game: req.body.id_game,
        id_user:  req.user._id,
        
    }
    new postdb(newPost).save().then(() => {
        console.log('Post Salvo com sucesso');
    })
    
    jogos.findOne({ _id: req.body.id_game }).then((jogo) => {
        
        jogo.nota_game = classjogo.novaNota(req.body.nota);
        jogo.quantidade = classjogo.quantidade+1;
        jogo.notaTotal = classjogo.novoTotal(req.body.nota);
       

        jogo.save().then(() => {
            
            console.log("Editado com sucesso");
    
        })
    })
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