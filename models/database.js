const sequelizeDb = require('sequelize');
const sequelizeConfig = new sequelizeDb(
    'agencia_db0', // Nome do banco de dados
    'root', // Nome de usuário do banco de dados
    '', // Senha do banco
    {
        dialect: 'sqlite',
        storage: './agencia_db0.sqlite',
    }
);

module.exports = { sequelizeDb, sequelizeConfig };

