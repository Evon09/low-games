const mongoose = require('mongoose');

require('../Database/userDb');
const users = mongoose.model('userdb');

const findEmail = async (email)=>{

    const user = await users.findOne({ email_user: email })

    return user;

}

const createUser = async (newUser) => {
    
    await new users(newUser).save();

}

module.exports = {

    findEmail,
    createUser

}