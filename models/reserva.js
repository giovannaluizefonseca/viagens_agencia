const { sequelizeDb, sequelizeConfig } = require('./database');
const cliente = require('./cliente');


const reserva = sequelizeConfig.define(
    'reserva',
    {
        data_reserva:{type:sequelizeDb.DATE},
        valor_total:{type:sequelizeDb.FLOAT}
    }
);


cliente.hasMany(reserva, {onDelete: 'CASCADE', onUpdate: 'CASCADE'});
reserva.belongsTo(cliente); 

reserva.sync(); 

module.exports = reserva;
