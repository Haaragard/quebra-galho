const mongoose = require('mongoose');
const Servico = mongoose.model('Servico');

module.exports = {
    async index(req, res) { //listar
        const { page = 1} = req.query;
        const servico = await Servico.paginate({},{page, limit: 10});

        return res.json(servico);
    },

    async show(req, res){ //Listar
        const servico = await Servico.findById(req.params.id);
        return res.json(servico);
    },

    async filtroCategotia(req, res){ //Listar
        const servico = await Servico.findById(req.params.id_categoria.nome);
        return res.json(servico);
    },

    // async filtrarValor(req, res){ //Listar
    //     const servico = await Servico.findById(req.params.valor);
    //     return res.json(servico);
    // },


    //  async filtrarValor(req, res){ //filtrar Valor
    //     Servico.findById({valor:req.query.valor}).then((result) => {
    //         res.json(result)
    //   }, (err) => {
    //         res.status(500).json({error: err})
    //    })
    //  },

    // async filtrarCategoria(req, res){ //Filtrar Categoria
    //   Servico.findById({id_categoria:req.query.id_categoria}).then((result) => {
    //       res.json(result)
    // }, (err) => {
    //       res.status(500).json({error: err})
    //  })
    // },

    // async filtrarTitulo(req, res){ //Buscar por titulo
    //     Servico.findById({titulo:req.query.titulo}).then((result) => {
    //         res.json(result)
    //   }, (err) => {
    //         res.status(500).json({error: err})
    //    })
    //   },
  

   
    async store(req, res){ // criar
        const servico = await Servico.create(req.body);

        return res.json(servico);
    },

    async update(req, res){
        const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.json(servico);
    },

    async destroy(req, res){
        await Servico.findByIdAndRemove(req.params.id);

        return res.send();
    }
};
