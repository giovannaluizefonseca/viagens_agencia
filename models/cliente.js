const { sequelizeDb, sequelizeConfig } = require('./database');

const cliente = sequelizeConfig.define(
    'cliente',
    {
        nome:{type:sequelizeDb.STRING},
        sobrenome:{type:sequelizeDb.STRING},
        email:{type:sequelizeDb.STRING},
        telefone:{type:sequelizeDb.STRING}
    }
);

cliente.sync();

module.exports = cliente;
