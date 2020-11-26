const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(express.json()); //coverte o corpa das requisicoes para JSON
app.use(cors());
//manipulador de rotas

app.use(routes);

//exposição na porta
app.listen(3333);