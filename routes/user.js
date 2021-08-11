//requires
var bodyParser = require('body-parser');
const classUser = require('../public/Models/userClass');
const bcrypt = require('bcryptjs');
const path = require('path');


//bd
var user = require('../public/Models/tb_user');
var jogo = require('../public/Models/tb_jogos');


//express static
const express = require('express')
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../public/Models'));
const router = express.Router()



//index 
router.get('/', function (req, res) {
    
    jogo.findAll().then(function (listaJogos){
        res.render('index', { listaJogos: listaJogos });
    });

});


//rotpara cada jogo
router.get('/jogo/:id/:nome_jogo', function (req, res) {

    // jogo.findOne({ id_jogo: req.params.id, nome_jogo: req.params.nome_jogo })
    jogo.findAll({
        where: {
            id_jogo: req.params.id,
            nome_jogo: req.params.nome_jogo
        }
    }).then(function (pagJogo) {
            //console.log(pagJogo);
       res.render('jogos',{pagJogo: pagJogo}); 
    });

   // res.send(req.params.id + req.params.nome_jogo);
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

  user.findOne({ email_user: req.body.email }).then((usuario) => {
        if (usuario) {
            console.log("DEU ERRO");
            res.redirect("/cadastro");
        } else {
            const classuser = new classUser(req.body.nome, req.body.email, req.body.pass);
            bcrypt.genSalt(10, (erro, salt) => {
                bcrypt.hash(classuser.senha, salt, (erro, hash) => {
                    if (erro) {
                        console.log("DEU ERRO");
                        res.redirect("/cadastro");
                    }
                    
                    classuser.senha = hash;

                    classuser.salvarCadastro();
                    res.redirect("/login");
                      
                })
            })
        }
    });
    
    //res.redirect('/login');
    
})


module.exports = router