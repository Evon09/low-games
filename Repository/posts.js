const mongoose = require('mongoose');

require('../Database/postDb');
const postdb = mongoose.model('postdb');



const removeAllPost = async (gameId) => {
    
    await postdb.remove({ _id: gameId }).then(() => {

        console.log('Jogo Deletado');
        
    });


}


const findAll = async (gameId) => {
    
    const posts = await postdb.find({ id_game: gameId });
    console.log(posts);
    return posts;

}

const findPost = async (userId,gameId) => {
    
   
    const post = await postdb.find({ id_user: userId, id_game: gameId });
    
    if (post[0] == undefined) {

        return null;
    }
    
    return post[0].id_user;

}

const removePost = async (postId) => {
        
    await postdb.remove({ _id: postId }).then(() => {

        console.log('Post deletado');
        
    }).catch((err) => {
        console.log("-->"+err)
    });

}

const addPost = async (newPost) => {
    
    await new postdb(newPost).save().then(() => {
        console.log('Post Salvo com sucesso');
    })

}


module.exports = {


    removeAllPost,
    removePost,
    findAll,
    findPost,
    addPost,

}