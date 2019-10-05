const mongoose =  require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const PagamentoSchema = new mongoose.Schema({
    confirmacao:{
        type: Boolean,
        required: true,
    },
    id_agenda:{
        type: String,
        required: true,
    },
});

PagamentoSchema.plugin(mongoosePaginate);

mongoose.model('Pagamento', PagamentoSchema);