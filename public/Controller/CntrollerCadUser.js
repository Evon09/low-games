
//const classjogo = require('../Models/classjogo');
//const classuser = require('../Models/classuser');

class Controller {


    verificarCampo(campo) {

        if (campo === "" || campo == null) {

            return false;
        } else {
            return true;
        }

    }

    checkForm() {
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var senha = document.getElementById("pass").value;
    
        if (!this.verificarCampo(nome) || !this.verificarCampo(email) || !this.verificarCampo(senha)) {
            window.alert("ERRO Preencha o campo");
            return false;
        } else {

            return true;
        }
    }

    

    

}


var controller = new Controller;


