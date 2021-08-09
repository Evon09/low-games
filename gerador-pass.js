const bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var senha = "adm";
var hash = bcrypt.hashSync(senha, salt);


console.log(hash);
    

