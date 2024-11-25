const express = require('express');
const router = express.Router();
const cliente = require('../models/cliente');
const reserva = require('../models/reserva');


router.post('/store', async (req, res) => {
    const resultado = await cliente.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        telefone: req.body.telefone
    });

    if (resultado) {
        res.redirect('/');
    } else {
        res.json({ erro: 'Não foi possível cadastrar o cliente' });
    }
});


router.get('/', async (req, res) => {
    const resultado = await cliente.findAll();
    if (resultado) {
        res.render('cliente/index', { dados: resultado });
    } else {
        console.log('Não foi possível exibir os dados');
    }
});


router.get('/destroy/:id', async (req, res) => {
    const resultado = await cliente.destroy({
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


router.get('/create', (req, res) => {
    res.render('cliente/addCliente');
});

module.exports = router;
