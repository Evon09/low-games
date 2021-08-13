const mongoose = require('mongoose');
const mongoDatabase = require('../Controller/bancoDeDados');





const gameSchema = new mongoose.Schema({

    nome_game: {
        type: String,
        required: true
    },
    resumo_game: {
        type: String,  
        required: true
    },
    nota_game: {
        type: Number,
        required: true

    },
    foto_game: {
        type: Buffer,
    },


})

mongoose.model('gamedb', gameSchema);

