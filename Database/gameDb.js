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
    Score: {
        type: Number,
        required: false,
        default: 0
    },
    photo: {
        type: String
    }
    

})

mongoose.model('gamedb', gameSchema);

