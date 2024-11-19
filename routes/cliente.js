const express = require('express');
const router = express.Router();
const cliente = require('../models/cliente');
const reserva = require('../models/reserva');

// Rota para cadastrar um cliente
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

// Rota para exibir os dados dos clientes
router.get('/', async (req, res) => {
    const resultado = await cliente.findAll();
    if (resultado) {
        res.render('cliente/index', { dados: resultado });
    } else {
        console.log('Não foi possível exibir os dados');
    }
});

// Rota para deletar um cliente
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

// Rota para exibir o formulário de cadastro de cliente
router.get('/create', (req, res) => {
    res.render('cliente/addCliente');
});

module.exports = router;
