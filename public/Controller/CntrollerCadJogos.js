
//const classjogo = require('../Models/classjogo');
//const classuser = require('../Models/classuser');

class Controller {


    verificarCampo(campo) {

        if (campo === "" || campo == Null) {

            return false;
        } else {
            return true;
        }

    }

    checkForm() {
        var nome = document.getElementById("nome").value;
        var resumo = document.getElementById("resumo").value;
        console.log(nome);
        console.log(resumo);
        if (!this.verificarCampo(nome) || !this.verificarCampo(resumo)) {
            window.alert("ERRO Preencha o campo");
            return false;
        } else {

            return true;
        }
    }

    checkModal() {
        var nome = document.getElementById("nomeEd").value;
        var resumo = document.getElementById("resumoEd").value;
        console.log(nome);
        console.log(resumo);
        if (!this.verificarCampo(nome) || !this.verificarCampo(resumo)) {
            window.alert("ERRO Preencha o campo");
            return false;
        } else {

            return true;
        }
    }


    

    

}


var controller = new Controller;


