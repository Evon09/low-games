const mongoose = require('mongoose');
const mongoDatabase = require('./database');
const Schema = mongoose.Schema;




const gameSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    summary: {
        type: String,  
        required: true
    },
    note: {
        type: Number,
        required: false
    },
    photo: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    

})

mongoose.model('gamedb', gameSchema);

