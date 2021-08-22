const mongoose = require('mongoose');

require('../Database/gameDb');
const gamedb = mongoose.model('gamedb');


const createGame = async (newGame)=> {
    
    await new gamedb(newGame).save().then(() => {
        console.log('Salvo com sucesso');
    }).catch((err) => {
        console.log( err + '-->[ERRO] jogo nao salvo');
    })


}

const findAll = async () => {

    const allGames = await gamedb.find({});
    return allGames;

}

const findGame = async (gameId) => {

    const game = await gamedb.findOne({ _id:gameId })
    return game;

} 


const removeGame = async (gameId)=> {
        
    await gamedb.remove({ _id: gameId }).then(() => {

        console.log('Jogo Deletado');
        
    });

}



const editGame = async (gameId,name,summary,photo)=> {
        
    await gamedb.findOne({ _id:gameId }).then((game) => {
    
        game.name =name;
        game.photo=photo,
        game.summary = summary;
        
        game.save().then(() => {
            
            console.log("Editado com sucesso");
            
    
        }).catch((err) => {

            console.log("Erro:" + err);
            
        });
    }).catch((err) => {

        console.log("Erro:" + err);
        
    });


}


const editScore = async (gameId, score) => {
    

    await gamedb.findOne({ _id:gameId }).then(async (game) => {
    
        game.Score = score;
        game.save();
    })

}



module.exports = {


    findAll,
    editGame,
    createGame,
    removeGame,
    editGame,
    findGame,
    editScore

}