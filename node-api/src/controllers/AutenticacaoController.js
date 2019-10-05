// const express = require('express');
// const Usuario = mongoose.model('Usuario');
// const routes = express.Router();

// routes.post('/cadastro', async (req, res) =>{
//     try{
//         const usuario = await Usuario.create(req.body);

//         return res.send({ usuario });
//     }catch(err){
//         return res.status(400).send({ error: 'Falha no cadastro'});
//     }
// });

// module.exports = app => app.use('/Autencicacao', routes);