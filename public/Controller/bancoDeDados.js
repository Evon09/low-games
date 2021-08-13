const mongoose = require('mongoose');

mongoose.Promise= global.Promise;
mongoDatabase = mongoose.connect("mongodb://localhost/lgames", {
    useMongoose: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('Servidor conectado');
}).catch(() => {
    console.log('Servidor Com ERRO');
});




module.exports = mongoDatabase;




