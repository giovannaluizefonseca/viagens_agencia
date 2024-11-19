const { sequelizeDb, sequelizeConfig } = require('./database');
const cliente = require('./cliente');

// Criando a tabela de reservas
const reserva = sequelizeConfig.define(
    'reserva',
    {
        data_reserva:{type:sequelizeDb.DATE},
        valor_total:{type:sequelizeDb.FLOAT}
    }
);

// Relacionamento: um cliente pode ter várias reservas
cliente.hasMany(reserva, { onDelete: 'CASCADE', onUpdate: 'CASCADE' });
reserva.belongsTo(cliente); 

reserva.sync(); 

module.exports = reserva;
