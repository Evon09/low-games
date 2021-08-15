

module.exports =  class classJogo {

    jogoId = null;//Id do jogo
    nota = null;//Nota do jogo
    peso = null;//peso media 



    constructor(id, nota, peso) {

        this.jogoId = id;
        this.nota = nota;
        this.peso = peso;
    }

    calNota(nota_user,peso_user) {
        
        var thisnota = parseInt(this.nota, 10);
        var thispeso = parseInt(this.peso, 10);
        var notauser = parseInt(nota_user, 10);
        var pesouser = parseInt(peso_user, 10);



        var newNota = (thisnota + notauser * pesouser) / (thispeso + pesouser)
        console.log(newNota);
        console.log(parseFloat(newNota));

        return newNota;
    }

    calPeso(peso_user) {
        
        var pesouser = parseInt(peso_user, 10);
        var thispeso = parseInt(this.peso, 10);
        
        var newpeso = pesouser + thispeso;

        console.log("-->"+newpeso);
        return newpeso;


    }

}


