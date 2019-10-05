const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario'); 
mongoose.set('useCreateIndex', true);
const cpf = require('node-cpf');
// var GoogleMapsLoader = require('google-maps'); 

// GoogleMapsLoader.KEY = 'AIzaSyBAfMhHNV2M5pZjjiu2zJal5VUAMQKvoGI&callback=initMap';

// GoogleMapsLoader.load(function(google) {
//     new google.maps.Map(el, options);
// });

// GoogleMapsLoader.LANGUAGE = 'fr';
// GoogleMapsLoader.REGION = 'GB';

module.exports = {
    async index(req, res) { //listar
        const { page = 1} = req.query;
        const usuario = await Usuario.paginate({},{page, limit: 10});

        return res.json(usuario);
    },

    async show(req, res){ //filtrar
        const usuario = await Usuario.findById(req.params.id);
        return res.json(usuario);
    },

    async store(req, res){ // criar
        
        if(cpf.validate(req.body.cpf)){
        const usuario = await Usuario.create(req.body);
        return res.json(usuario);
        }
    },

    async update(req, res){ // atualizar
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new:true});

        return res.json(usuario);
    },

    async destroy(req, res){ // deletar
        await Usuario.findByIdAndRemove(req.params.id);

        return res.send();
    }
};

