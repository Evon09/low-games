var userdb = require('../../Database/userDb');
const bcrypt = require('bcryptjs');

const usersRepository = require('../../Repository/users');


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

    createUser() {
        
        const newUser = {
            userName: this.nome,
            email_user: this.email,
            pass: this.senha
        }
    
        usersRepository.createUser(newUser);
    }



    hashpass() {
        let salt = bcrypt.genSaltSync(10);
        this.senha = bcrypt.hashSync(this.senha, salt);
        return true;
    }
        
                
   
}


 

