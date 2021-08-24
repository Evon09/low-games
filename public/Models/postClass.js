const postRepository = require('../../Repository/posts');


module.exports = class classPost {
    
    postId = null;
    userName = null;
    Score = null
    post = null; //
    gameId = null;
    userId = null;


    constructor(postId,userName,Score,post,gameId,userId) {

        this.postId = postId;
        this.userName = userName;
        this.Score = Score
        this.post = post;
        this.gameId = gameId;
        this.userId = userId;

    }


    newPost() {
        
        const newPost= {
        
            userName: this.userName,
            userScore: this.Score,
            post: this.post,
            id_game: this.gameId,
            id_user:  this.userId,
            
        }


        postRepository.addPost(newPost);

    }




}


