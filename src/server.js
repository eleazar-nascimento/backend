const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-illat.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req. query = acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

    app.use(cors());
    app.use(express.json());
    app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(routes);    

app.listen(process.env.PORT || 3333);