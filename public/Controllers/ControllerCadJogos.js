
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
        var nome = document.getElementById("name").value;
        var resumo = document.getElementById("summary").value;
        if (!this.verificarCampo(nome) || !this.verificarCampo(resumo)) {
            window.alert("ERRO Preencha o campo");
            return false;
        } else {
            var confirmation = confirm("Deseja postar esse comentario?");
            console.log(confirmation);
            if (confirmation == false) {
                return false;
            } else {
                
                return true;
                
            }
            
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
            var confirmation = confirm("Deseja postar esse comentario?");
            if (confirmation == false) {
                return false;
            }

            return true;
           
        }
      
    }
    

}


var controller = new Controller;


