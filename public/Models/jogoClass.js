

var jogo = class jogo {

    jogoId = null;//Id do jogo
    nome = null;//Nome do jogo
    resumo = null;//Resumo do jogo
    nota = null;//Nota do jogo
    foto = null;//Capa do jogo
    quatidadeAvaliacao = 0;


    constructor(id, nome, resumo, nota,foto , quantidade) {

        this.jogoId = id;
        this.nome = nome;
        this.resumo = resumo;
        this.nota = nota;
        this.foto = foto;
        this.quatidadeAvaliaca = quantidade;
    }

    calNota(nota_user,peso_user) {
        
        this.nota = (this.nota + (nota_user * peso_user)) / (this.peso + peso_user);

    }



}



module.export = new jogo();