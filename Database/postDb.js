const mongoose = require('mongoose');
const mongoDatabase = require('./database');
const Schema = mongoose.Schema;

const postSchema = new Schema({

    userName: {
        type:String,
        required: true
    },
    userNote: {
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





