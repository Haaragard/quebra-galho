const mongoose =  require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const HistoricoSchema = new mongoose.Schema({
    id_servico:{
        type: String,
        required: true,
    },
    id_agenda:{
        type: String,
        required: true,
    },
    id_usuario:{
        type:String,
        required: true,
    },
});

HistoricoSchema.plugin(mongoosePaginate);

mongoose.model('Historico', HistoricoSchema);