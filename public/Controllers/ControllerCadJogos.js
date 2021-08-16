
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
        
        var id = document.getElementById("idEd").value;
        var nomeid = "nomeEd" + id;
        var resumoid = "resumoEd" + id;
        var nome = document.getElementById(nomeid).value;
        var resumo = document.getElementById(resumoid).value;
        if (!resumo || !nome) {
            alert("[ERRO] Campo vazio");
            return false;
        } else {
            return true;
        }

      
      
    }

    

}


var controller = new Controller;


