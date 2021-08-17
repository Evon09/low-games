const mongoose = require('mongoose');
require('../../Database/gameDb');
const gamedb = mongoose.model('gamedb');
require('../../Database/postDb');
const postdb = mongoose.model('postdb');


module.exports = class classPost {
    
    postId = null;
    userName = null;
    post = null; //
    gameId = null;
    userId = null;

    


    constructor(postId,userName,post,gameId,userId) {

        this.postId = postId;
        this.userName = userName;
        this.post = post;
        this.gameId = gameId;
        this.userId = userId;

        
    }


    removePost() {
        
        postdb.remove({ _id: this.postId }).then(() => {

            console.log('Post deletado');
            
        }).catch((err) => {
            console.log("-->"+err)
        });

    }


    removeAllPost() {
        
        postdb.remove({ id_game: this.gameId  }).then(() => {
        
            console.log('Posts deletados');
            
        });


    };

    addPost() {


        


    }





}


