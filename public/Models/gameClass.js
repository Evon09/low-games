
const postRepository = require('../../Repository/posts');
const gameRepository = require('../../Repository/games');

module.exports =  class classJogo {

    gameId = null;//Id do jogo
    name = null;
    photo = null;
    summary = null;
    Score = null;//Nota do jogo
    rating = null;//peso media 
    total = null;//Total de nota

    constructor(id, name,summary,photo,Score, rating, total) {

        this.gameId = id;
        this.name = name;
        this.summary = summary;
        this.photo = photo;
        this.Score = Score
        this.rating = rating
        this.total = total;
        
    }



    newGame() {
        
        const newGame = {
            name: this.name,
            summary: this.summary,
            photo:  this.photo,
         
        }
    
        gameRepository.createGame(newGame);



    }





    async calScore() {
        
        const posts = await postRepository.findAll(this.gameId);

        var cont = 0;

        console.log(posts.length);

        for (var i=0; i< posts.length; i++) {
            
           //console.log(posts[i].userScore);
            cont += posts[i].userScore;

        }

        

        const score = (cont / posts.length);
    
        if (isNaN(score)) {
     
            await gameRepository.editScore(this.gameId, 0);
   
        } else {

            await gameRepository.editScore(this.gameId, score.toFixed(1));

        }
       
        

    }
    





}


