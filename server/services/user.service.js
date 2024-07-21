const User = require('./../models/User');


const createUser = async (params) => {
    const {username, password} = params;

    let existingUser = await findUser(username)
    if(existingUser) throw new Error('User exists')

    let user = await User.create({
        username,
        password
    })
};

const findUser = async (username) =>{
    let user = await User.findOne({where: {username}})
    return user
};

const findAll = async () => {
    const users = await User.findAll()
    return users
};

module.exports = { 
    createUser,
    findAll,
    findUser
};