//funçao para criar e sincronizar as tabelas

(async () => {

    const database = require('./bancoDeDados');
    const jogo = require('../Models/tb_jogos');
    const user = require('../Models/tb_user');
    await database.sync();
    user.findAll({where: { email_user: req.body.email}})
    // const tb_jogos = await jogo.findAll();
    // console.log(tb_jogos);
    // const novojogo = jogo.create({
    //     nome_jogo: 'gta',
    //     resumo_jogo: "testando o jogo",
    //     foto_jogo: "D:/Jair/Pictures/123.png"
    // });

})();

