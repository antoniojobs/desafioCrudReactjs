const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

//{ controllers
const UsuariosController = require('./controllers/UsuariosController');
const AvaliacaoController = require('./controllers/AvaliacaoController');
const RecrutadorController = require('./controllers/RecrutadorController');
const SessionController = require('./controllers/SessionController');
//} controllers

//{rotas de usuarios
routes.get('/usuarios', UsuariosController.index);
routes.post('/usuarios', UsuariosController.create);
routes.put('/usuarios/:id', UsuariosController.update);
routes.delete('/usuarios/:id', UsuariosController.delete);
//}

//{rotas de avalicaoes
routes.get('/avaliacao', AvaliacaoController.index);
routes.post('/avaliacao', AvaliacaoController.create);
//}
//{rotas de recrutador
routes.get('/recrutador', RecrutadorController.index);
routes.post('/recrutador', RecrutadorController.create);
//}
//{rotas de login recrutador
routes.post('/session', SessionController.create);
//}


module.exports = routes;