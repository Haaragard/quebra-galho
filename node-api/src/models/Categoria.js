const mongoose =  require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CategoriaSchema = new mongoose.Schema({
    nome:{
        type: String,
    }
});

CategoriaSchema.plugin(mongoosePaginate);

mongoose.model('Categoria', CategoriaSchema);