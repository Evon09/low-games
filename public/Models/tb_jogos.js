// configurando sequelize/banco de dados;

const database = require('../Controller/bancoDeDados');
const Sequelize = require('sequelize');

// criando o objeto tb_jogo;
const jogo = database.define('tb_jogos', {
    id_jogo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_jogo: {
        type: Sequelize.STRING(50),
        allowNull: false,

    },
    resumo_jogo: {
        type: Sequelize.TEXT,
        allowNull: false,

    },
    nota_jogo: {
        type: Sequelize.INTEGER,
        allowNull: true,

    },
    foto_jogo: {
        type: Sequelize.BLOB,
        allowNull: true,

    }

});


//export tb_jogo;
module.exports = jogo;
