const mongoose = require('mongoose');
const mongoDatabase = require('./bancoDeDados');
const Schema = mongoose.Schema;




const gameSchema = new Schema({

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

    },
    foto_game: {
        type: String
    },
    quantidade: {
        type: Number,
        default: 1
    },
    notaTotal: {
        type: Number,
        default: 0
    },
    

})

mongoose.model('gamedb', gameSchema);

