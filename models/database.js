const sequelizeDb = require('sequelize');
const sequelizeConfig = new sequelizeDb(
    'agencia_db0', 
    'root', 
    '', 
    {
        dialect: 'sqlite',
        storage: './agencia_db0.sqlite',
    }
);

module.exports = { sequelizeDb, sequelizeConfig };

