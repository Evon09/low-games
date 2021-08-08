
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
        if (!this.verificarCampo(nome) && !this.verificarCampo(resumo)) {
            window.alert("ERRO Preencha o campo");
            return false;
        } else {

            return true;
        }
    }


    

}


var controller = new Controller;

// function lista() {
//     (async () => {

//         const { database } = require('./bancoDeDados');
//         const { jogo } = require('../Models/tb_jogos');
//         await database.sync();

//         const tb_jogos = await jogo.findAll();
//         console.log(tb_jogos);
//         // const novojogo = jogo.create({
//         //     nome_jogo: 'gta',
//         //     resumo_jogo: "testando o jogo",
//         //     foto_jogo: "D:/Jair/Pictures/123.png"
//         // });

//     })
// }


