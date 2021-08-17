const mongoose = require('mongoose');
require('../../Database/gameDb');
const gamedb = mongoose.model('gamedb');
require('../../Database/postDb');



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

    removeGame() {
        
        gamedb.remove({ _id: this.gameId }).then(() => {

            console.log('Jogo Deletado');
            
        });

    }

    editGame() {
        
        gamedb.findOne({ _id: this.gameId }).then((game) => {
        
            game.name = this.name;
            game.photo=  this.photo,
            game.summary = this.summary;
            
            game.save().then(() => {
                
                console.log("Editado com sucesso");
                
        
            }).catch((err) => {
    
                console.log("Erro:" + err);
                
    
            });
        }).catch((err) => {
    
            console.log("Erro:" + err);
            
    
        });



    }

    ScoreRemove(userScore) {

        console.log(parseInt(this.Score,10));
        this.removeScore(userScore);
        this.removeTotal(userScore);

        gamedb.findOne({ _id: this.gameId }).then((game) => {
        
            game.Score =  this.Score;
            game.rating = this.rating - 1;
            game.total = this.total;
           
    
            game.save().then(() => {
                
                console.log("Editado com sucesso");
        
            }).catch((err) => {
                console.log("-->"+err);
            })
        })

        console.log("Teste 123",this.total,parseInt(this.Score,10));


    }

    removeScore(userScore) {
        
        var ScoreUser = parseInt(userScore, 10);
        var rating = parseInt(this.rating, 10);
        var total = parseInt(this.total, 10);
        var ScoreNew = (total - ScoreUser) / (rating - 1);
        var Score = parseInt(ScoreNew, 10)
        if (Number.isNaN(Score)) {
            this.Score = 0;
        } else {
            this.Score = Score;
        }
        
        console.log(this.Score);

    }

    removeTotal(userScore) {
        
        var ScoreTotal = parseInt(this.total, 10);
        var ScoreUser = parseInt(userScore, 10);
        var totalNew = ScoreTotal - ScoreUser;
        totalNew = parseInt(totalNew, 10);
        this.total = totalNew;
        console.log(this.total);
    }

    addScore(userScore) {
        
        this.newScore(userScore);
        this.newTotal(userScore);

        gamedb.findOne({ _id: this.gameId }).then((game) => {
        
            game.Score = this.Score;
            game.rating = this.rating + 1;
            game.total = this.total;
           
    
            game.save().then(() => {
                
                console.log("Editado com sucesso");
        
            }).catch((err) => {
                console.log("-->"+err);
            })
        })


    }

    newScore(userScore) {
        
        var ScoreUser = parseInt(userScore, 10);
        var rating = parseInt(this.rating, 10);
        var total = parseInt(this.total, 10);
        var ScoreNew = (total + ScoreUser) / (rating + 1);
        var Score = parseFloat(ScoreNew.toFixed(1), 10)
        
        this.Score =  Score;
    }

    newTotal(userScore) {
        
        var ScoreTotal = parseInt(this.total, 10);
        var ScoreUser = parseInt(userScore, 10);
        var totalNew = ScoreTotal + ScoreUser;
        totalNew = parseInt(totalNew, 10);
        this.total = totalNew;

    }

}


