class Controller {


    verificarCampo(campo) {

        if (campo === "" || campo == Null) {

            return false;
        } else {
            return true;
        }

    }

    checkForm() {
        var post = document.getElementById("post").value;

        if (!this.verificarCampo(post) ) {
            window.alert("ERRO Preencha o campo");
            
            return false;
        } else {
            if (window.confirm("Você realmente quer sair?")) {
                window.open("sair.html", "Obrigado pela visita!");
              }

            return true;
        }
    }

    

}


var controller = new Controller;
