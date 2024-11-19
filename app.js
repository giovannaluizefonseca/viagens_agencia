const express = require('express');
const handlebars = require('express-handlebars');

const app = express();
const porta = 8000;

// Configurando o express para receber dados do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurando Handlebars
app.engine('handlebars', handlebars.engine({ extended: true }));
app.set('view engine', 'handlebars');

// Carregar as rotas
const clienteRouter = require('./routes/cliente');
const reservaRouter = require('./routes/reserva');

// Utilizando as rotas
app.use('/cliente', clienteRouter);
app.use('/reserva', reservaRouter);

// Página inicial
app.get('/', (req, res) => {
    res.render('home');
});

// Iniciar o servidor
app.listen(porta, () => {
    console.log("Servidor executando na porta", porta);
});
