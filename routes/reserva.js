const express = require('express');
const router = express.Router();
const reserva = require('../models/reserva');
const cliente = require('../models/cliente');

// Rota para cadastrar uma reserva
router.post('/store', async (req, res) => {
    const resultado = await reserva.create({
        data_reserva: req.body.data_reserva,
        valor_total: req.body.valor_total,
        clienteId: req.body.clienteId // Relaciona a reserva ao cliente
    });

    if (resultado) {
        res.redirect('/');
    } else {
        res.json({ erro: 'Não foi possível cadastrar a reserva' });
    }
});

// Rota para exibir as reservas de um cliente
router.get('/', async (req, res) => {
    const resultado = await reserva.findAll({ include: cliente });
    if (resultado) {
        res.render('reserva/index', { dados: resultado });
    } else {
        console.log('Não foi possível exibir as reservas');
    }
});

router.get('/destroy/:id', async (req, res) => {
    const resultado = await reserva.destroy({
        where: {
            id:req.params.id
        }
    });

    if(resultado){
        res.redirect('/');
    }
    else{
        res.json({erro:"Não foi possivel excluir"})
    }
});

// Rota para exibir o formulário de cadastro de reserva
router.get('/create', async (req, res) => {
    const clientes = await cliente.findAll();
    res.render('reserva/addReserva', { clientes });
});

module.exports = router;

