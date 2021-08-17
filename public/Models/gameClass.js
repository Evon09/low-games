const mongoose = require('mongoose');
require('../../Database/gameDb');
const gamedb = mongoose.model('gamedb');
require('../../Database/postDb');



module.exports =  class classJogo {

    gameId = null;//Id do jogo
    name = null;
    photo = null;
    summary = null;
    note = 0;//Nota do jogo
    rating = null;//peso media 
    total = null;//Total de nota
    


    constructor(id, name,summary,photo,note, rating, total) {

        this.gameId = id;
        this.name = name;
        this.summary = summary;
        this.photo = photo;
        this.note = parseFloat(note,10);
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


   

  
    noteRemove(userNote) {

        console.log(parseInt(this.note,10));
        this.removeNote(userNote);
        this.removeTotal(userNote);

        gamedb.findOne({ _id: this.gameId }).then((game) => {
        
            game.note =  this.note;
            game.rating = this.rating - 1;
            game.total = this.total;
           
    
            game.save().then(() => {
                
                console.log("Editado com sucesso");
        
            }).catch((err) => {
                console.log("-->"+err);
            })
        })

        console.log("Teste 123",this.total,parseInt(this.note,10));


    }

    removeNote(userNote) {
        
        var noteUser = parseInt(userNote, 10);
        var rating = parseInt(this.rating, 10);
        var total = parseInt(this.total, 10);
        var noteNew = (total - noteUser) / (rating - 1);
        var note = parseInt(noteNew, 10)
        if (Number.isNaN(note)) {
            this.note = 0;
        } else {
            this.note = note;
        }
        
        console.log(this.note);

    }

    removeTotal(userNote) {
        
        var noteTotal = parseInt(this.total, 10);
        var noteUser = parseInt(userNote, 10);
        var totalNew = noteTotal - noteUser;
        totalNew = parseInt(totalNew, 10);
        this.total = totalNew;
        console.log(this.total);
    }




    addNote(userNote) {
        
        this.newNote(userNote);
        this.newTotal(userNote);

        gamedb.findOne({ _id: this.gameId }).then((game) => {
        
            game.note = this.note;
            game.rating = this.rating + 1;
            game.total = this.total;
           
    
            game.save().then(() => {
                
                console.log("Editado com sucesso");
        
            }).catch((err) => {
                console.log("-->"+err);
            })
        })


    }



    newNote(userNote) {
        
        var noteUser = parseInt(userNote, 10);
        var rating = parseInt(this.rating, 10);
        var total = parseInt(this.total, 10);
        var noteNew = (total + noteUser) / (rating + 1);
        var note = parseFloat(noteNew.toFixed(1), 10)
        
        this.note =  note;
    }

    newTotal(userNote) {
        
        var noteTotal = parseInt(this.total, 10);
        var noteUser = parseInt(userNote, 10);
        var totalNew = noteTotal + noteUser;
        totalNew = parseInt(totalNew, 10);
        this.total = totalNew;

    }






}


