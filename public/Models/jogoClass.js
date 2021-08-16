

module.exports =  class classJogo {

    jogoId = null;//Id do jogo
    nota = null;//Nota do jogo
    quantidade = null;//peso media 
    notaTotal = null;//Total de nota

    constructor(id, nota, quantidade, notaTotal) {

        this.jogoId = id;
        this.nota = nota;
        this.quantidade = parseInt(quantidade, 10);
        this.notaTotal = notaTotal;
    }

    novaNota(notaUser) {
        
        var notauser = parseInt(notaUser, 10);
        var quantidade = parseInt(this.quantidade, 10);
        var notaTotal = parseInt(this.notaTotal, 10);
        var novaNota = (notaTotal + notauser) / quantidade;
        //console.log(novaNota);
        novaNota = parseFloat(novaNota.toFixed(1));
        return novaNota;
    }

    novoTotal(notaUser) {
        
        var notaTotal = parseInt(this.notaTotal, 10);
        var notauser = parseInt(notaUser, 10);

        return notaTotal + notauser;

    }

}


