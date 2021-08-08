//funçao para criar e sincronizar as tabelas

(async () => {

    const database = require('./bancoDeDados');
    const jogo = require('../Models/tb_jogos');
    await database.sync();

    const tb_jogos = await jogo.findAll();
    console.log(tb_jogos);
    // const novojogo = jogo.create({
    //     nome_jogo: 'gta',
    //     resumo_jogo: "testando o jogo",
    //     foto_jogo: "D:/Jair/Pictures/123.png"
    // });

})();