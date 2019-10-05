const mongoose =  require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    cpf:{
        type: Number,
        unique: true,
        required: true,
    },
    senha:{
        type: String,
        required: true,
        select: false,
    },
    status:{
        type:String,
        required: true,
    },
    habilidades:{
        type: String,
    },
    necessidades:{
        type: String,
    },
    foto:{
        type: String,
    },
    certificado:{
        type:String,
    },
    reputacao: {
        type: Number,
    },
    id_servico:{
        type: String,
    },

});

UsuarioSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

UsuarioSchema.plugin(mongoosePaginate);

mongoose.model('Usuario', UsuarioSchema);