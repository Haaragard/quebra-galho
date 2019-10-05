const mongoose =  require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AgendaSchema = new mongoose.Schema({
    data: {
        type: Date,
        required: true,
    },
    horario:{
        type: Date,
        required: true,
    },
    cidade:{
        type: String,
        required: true,
    },
    bairro:{
        type: String,
        required: true,
    },
    nCasa:{
        type: Number,
        required: true,
    },
    realizado:{
        type: Boolean,
        required: true,
    },
    pago:{
        type: Boolean,
        required: true,
    },
    id_servico:{
        type: String,
        required: true,
    },
    id_usuario:{
        type: String,
        require: true,
    },
});

AgendaSchema.plugin(mongoosePaginate);

mongoose.model('Agenda', AgendaSchema);