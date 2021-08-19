const mongoose = require('mongoose');
require('../../Database/gameDb');
const gamedb = mongoose.model('gamedb');
require('../../Database/postDb');

const postRepository = require('../../Repository/posts');
const gameRepository = require('../../Repository/games');

module.exports =  class classJogo {

    gameId = null;//Id do jogo
    name = null;
    photo = null;
    summary = null;
    Score = 0;//Nota do jogo
    rating = null;//peso media 
    total = null;//Total de nota

    constructor(id, name,summary,photo,Score, rating, total) {

        this.gameId = id;
        this.name = name;
        this.summary = summary;
        this.photo = photo;
        this.Score = parseFloat(Score,10);
        this.rating = parseInt(rating, 10);
        this.total = total;
        
    }




    async calScore() {
        
        const posts = await postRepository.findAll(this.gameId);

        var cont = 0;

        for (var i=0; i< posts.length; i++) {
            
            console.log(posts[i].userScore);
            cont += posts[i].userScore;

        }

        const score = cont / posts.length;
 
        gameRepository.editScore(this.gameId, score);


    }
    



}


