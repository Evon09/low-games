
const passport = require('passport');
const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../Database/userDb');

const user = mongoose.model('userdb');

module.exports = function(passport) {

    passport.use(new localStrategy({usernameField: 'email', passwordField: 'pass'}, (email_user, pass, done) => {

        user.findOne({ email_user: email_user }).then((user) => {
            console.log(user);
            if (!user) {
                console.log(user);
                return done(null, false, {message: 'Conta inexistente'})
            }

            bcrypt.compare(pass, user.pass, (erro, equal) => {
                if(equal) {
                    return done(null, user)
                } else {
                    return done(null, false, {message: 'Senha incorreta'})
                }
            })
        })
    }))



    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        user.findById(id, (err, user) => {
            done(err, user)
        })
    })

}