const mongoose = require('mongoose');
const mongoDatabase = require('../Controller/bancoDeDados');
const Schema = mongoose.Schema;

const postSchema = new Schema({

    nome_user: {
        type:String,
        required: true
    },
    nota: {
        type: Number,  
        required: true
    },
    post: {
        type: String,
        required: true

    },
    id_game:{
        type: String,
        required: true
    },
    id_user:{
        type: String,
        required: true
    },

})

mongoose.model('postdb', postSchema);





