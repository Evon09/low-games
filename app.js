//Import e config do express;
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql2');
var express = require('express');
var app = express();
app.use(express.static('public/views'));
app.use(express.static('public/Controller'));
app.use(express.static(__dirname + '/public'));
var sequelize = require('./public/Controller/bancoDeDados');

//ejs config
app.set('views','./public/views');
app.set('view engine', 'ejs');


//tb_jogos;
var jogo = require('./public/Models/tb_jogos');
var bodyParser = require('body-parser');


//body-parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//rota main;
app.get('/', function (req, res) {
    
    jogo.findAll().then(function (listaJogos){
        res.render('index', { listaJogos: listaJogos });
    });

});


//rota para cadastro;
app.get('/cadastro-jogos', function (req, res){

    jogo.findAll().then(function (listaJogos){
        res.render('cadastro-jogos', { listaJogos: listaJogos });
    });
    
});


//rota para login
app.get('/login.html', function (req, res){

    
   res.render('login');
  
     
});


//rota responavel por mandar os dados para o banco de dados;
app.post('/add', (req, res) => {

    jogo.create({
        nome_jogo: req.body.nome,
        resumo_jogo: req.body.resumo,
        foto_jogo: req.body.foto,
        nota_jogo: 0
    });
    
    res.redirect('/cadastro-jogos')
   
});


//rota para remover
app.post('/remove', (req, res) => {

    jogo.destroy({
        where: {
        id_jogo: req.body.idJogo
        }
    });

    res.redirect('/cadastro-jogos')
    
});


//inciar o servidor http://localhost:3000/
app.listen(9000, () => console.log('Aplicação executando na porta 9000!'));