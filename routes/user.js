const express = require('express')
var app = express();
const router = express.Router()
var user = require('../public/Models/tb_user');
var jogo = require('../public/Models/tb_jogos');
var bodyParser = require('body-parser');
const classUser = require('../public/Models/classuser');
const bcrypt = require('bcryptjs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('../public/Models'));


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


//cadastro usuario
router.get('/cadastro', function (req, res){

   
   
    res.render('cadastro');
 
});
 
router.post("/cad-user", function (req, res) {

  user.findOne({ email_user: req.body.email }).then((usuario) => {
        if (!usuario) {
            console.log("DEU ERRO");
        } else {
            const classuser = new classUser(req.body.nome, req.body.email, req.body.pass);
            bcrypt.genSalt(10, (erro, salt) => {
                bcrypt.hash(classuser.senha, salt, (erro, hash) => {
                    if (erro) {
                        console.log("DEU ERRO");
                        res.redirect("/cadastro");
                    }
                    
                    classuser.senha = hash;

                    classuser.salvarCadastro()
                    res.redirect("/login");
                   
                      
                })
            })
        }
    });
    
    //res.redirect('/login');
    
})


module.exports = router