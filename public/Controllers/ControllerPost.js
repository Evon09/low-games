class Controller {


    verificarCampo(campo) {

        if (campo === "" || campo == null) {

            return false;
        } else {
            return true;
        }

    }

    checkForm() {
        var post = document.getElementById("post").value;

        if (!this.verificarCampo(post) ) {
            window.alert("ERRO Preencha o campo");
            var confirmatio = confirm("Deseja postar esse comentario?");
            
            return false;
        } else {

            var confirmatio = confirm("Deseja postar esse comentario?");
            console.log(confirmatio);
            if (confirmatio == false) {
                return false;
              }

            return true;
        }
    }

    

}


var controller = new Controller;
