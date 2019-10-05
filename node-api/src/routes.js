const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UsuarioController');
const ServicoController = require('./controllers/ServicoController');
const AgendaController = require('./controllers/AgendaController');
const HistoricoController = require('./controllers/HistoricoController');
const PagamentoController = require('./controllers/PagamentoController');
const CategoriaController = require('./controllers/CategoriaController');

//ROTAS DE USUARIO
routes.get("/usuarios", UsuarioController.index) ; // req = requiseições res = resposta
routes.get("/usuarios/:id", UsuarioController.show);
routes.post("/usuarios", UsuarioController.store);
routes.put("/usuarios/:id", UsuarioController.update);
routes.delete("/usuarios/:id", UsuarioController.destroy);

//ROTAS DE SERVIÇO
routes.get("/servicos", ServicoController.index) ; // req = requiseições res = resposta
routes.get("/servicos/:id", ServicoController.show);
routes.post("/servicos", ServicoController.store);
routes.put("/servicos/:id", ServicoController.update);
routes.delete("/servicos/:id", ServicoController.destroy);
//routes.get("/servicos/:id_categoria.nome", ServicoController.filtrocategotia);


//ROTAS DE PAGAMENTO
routes.get("/agendas", AgendaController.index) ; // req = requiseições res = resposta
routes.get("/agendas/:id", AgendaController.show);
routes.post("/agendas", AgendaController.store);
routes.put("/agendas/:id", AgendaController.update);
routes.delete("/agendas/:id", AgendaController.destroy);

//ROTAS DE HISTORICO
routes.get("/historicos", HistoricoController.index) ; // req = requiseições res = resposta
routes.get("/historicos/:id", HistoricoController.show);
routes.post("/historicos", HistoricoController.store);
routes.put("/historicos/:id", HistoricoController.update);
routes.delete("/historicos/:id", HistoricoController.destroy);

//ROTAS PAGAMENTO
routes.get("/pagamentos", PagamentoController.index) ; // req = requiseições res = resposta
routes.get("/pagamentos/:id", PagamentoController.show);
routes.post("/pagamentos", PagamentoController.store);
routes.put("/pagamentos/:id", PagamentoController.update);
routes.delete("/pagamentos/:id", PagamentoController.destroy);

//ROTAS CATEGORIA
routes.get("/categorias", CategoriaController.index) ; // req = requiseições res = resposta
routes.get("/categorias/:id", CategoriaController.show);
routes.get("/categorias/:nome", CategoriaController.filtroCategoria);
routes.post("/categorias", CategoriaController.store);
routes.put("/categorias/:id", CategoriaController.update);
routes.delete("/categorias/:id", CategoriaController.destroy);

module.exports = routes;