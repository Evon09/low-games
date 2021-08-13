const mongoose = require('mongoose');
const mongoDatabase = require('../Controller/bancoDeDados');


const userSchema = new mongoose.Schema({

    nome_user: {
        type: String,
        required: true
    },
    email_user: {
        type: String,  
        required: true
    },
    senha_user: {
        type: String,
        required: true

    },
    adm_user: {
        type: Number,
        required: true,
        default: false
    },
    peso_user: {
        type: Number,
        required: true,
        default: 1

    }


})

mongoose.model('userdb', userSchema);





// const database = require('../Controller/bancoDeDados');
// const Sequelize = require('sequelize');
// const { FLOAT } = require('sequelize');

// // criando o objeto tb_user;
// const user = database.define('tb_user', {
//     id_user: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     nome_user: {
//         type: Sequelize.STRING(60),
//         allowNull: false,

//     },
//     email_user: {
//         type: Sequelize.STRING(60),
//         allowNull: false,

//     },
//     senha_user: {
//         type: Sequelize.STRING(100),
//         allowNull: false,

//     },
//     adm_user:{
//         type: Sequelize.INTEGER,
//         defaultValue: 0,
//     },
//     peso_user: {
//         type: Sequelize.FLOAT,
//         allowNull: false,
//         defaultValue: 1,

//     }

// });


// //export tb_user;
// module.exports = user;
