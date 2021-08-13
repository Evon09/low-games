
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
        var form = document.getElementById(id);
        var nome = document.getElementById("nomeEd");
        //var nome = form.nomeEd;
       // var resumo = form.resumoEd;
        !form.nomeEd.value;
        alert(test);
       // alert(!form.nomeEd.value);
      

        if (!form.nomeEd.value || !form.resumoEd.value) {
            alert(!form.nomeEd.value);
            alert("[ERRO] Campo vazio");
            return false;
        } else {
            return true;
        }

        // alert(id.nomeEd.value);
        // if ( !nome.value  || !resumo.value) {
        //     window.alert("ERRO Preencha o campo" + id);
        //     return false;
        // } else {

            
        // }
      
    }


    

    

}


var controller = new Controller;


