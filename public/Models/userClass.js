var userdb = require('./tb_user');
const Sequelize = require('sequelize');

module.exports = class classUser {

    userId = null;//Id do usuario
    nome = null;//Nome do usuario
    email = null;//Email do usuario
    senha = null;//Senha do usuario
    peso = null;//Peso da nota do Usuario


    constructor( nome, email, senha, nota) {

        
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.peso = nota;

    }

    salvarCadastro() {
        
        userdb.create({
            nome_user:  this.nome,
            email_user: this.email,
            senha_user: this.senha,
        });

    }


}


 

