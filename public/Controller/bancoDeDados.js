const Sequelize = require('sequelize');

//conexao com banco de dados
const sequelize = new Sequelize("lgames", 'root', '12345678', {
    host: "localhost",
    dialect: 'mysql'
});


module.exports = sequelize;


