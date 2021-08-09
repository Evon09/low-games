const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
const user = require('./public/Models/tb_user');
var mysql = require('mysql2');

module.exports = function (passport) {
    
    passport.use(new localStrategy({
        usernameField: 'nome_user',
    }, (nome_user, email_user, senha_user) => {
        user.findOne({ nome_user: nome_user }), then(user => {
            if (user) {
                return done(null,false,{menssage: 'Conta errada!!'})
            }

            bcrypt.compare(senha_user, user.senha_user, (erro, batem) => {

                if (batem) {
                    return done(none,user)
                } else {
                    return done(null,false,{menssage: 'Senha errada!!'})
                }

            });

        })
    }))
    passport.serializeUser((usuario, done) => {
        
        done(null,usuario.id)

    })

    passport.deserializeUser((id, done) => {
        user.findById(id,(err, usuario)=> {
            done(err, user);
        })
    })



}