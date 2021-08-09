// configurando sequelize/banco de dados;

const database = require('../Controller/bancoDeDados');
const Sequelize = require('sequelize');

// criando o objeto tb_user;
const user = database.define('tb_user', {
    id_user: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_user: {
        type: Sequelize.STRING(60),
        allowNull: false,

    },
    email_user: {
        type: Sequelize.STRING(60),
        allowNull: false,

    },
    senha_user: {
        type: Sequelize.STRING(100),
        allowNull: false,

    },
    peso_user: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 1,

    }

});


//export tb_user;
module.exports = user;
