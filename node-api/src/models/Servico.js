const mongoose =  require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ServicoSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
    },
    foto:{
        type: String,
    },
    descricao:{
        type: String,
        required: true,
    },
    valor:{
        type: Number,
        required: true,
    },
    vizualizacao:{
        type: Number
    },
    id_categoria:{
        type: String,
        required: true,
    },
    id_usuario:{
        type:String,
        required: true,
    },
});

ServicoSchema.plugin(mongoosePaginate);

mongoose.model('Servico', ServicoSchema);