const {User} = require('./../models');
const {hashPass} = require('../utils/brcypt.util');
const { AppError } = require('../errors');

const createUser = async (params) => {
    const {username, password} = params;

    let existingUser = await findByUsername(username)
    if(existingUser) throw new AppError('User exists')
    
    const hash = await hashPass(password)    

    let user = await User.create({
        username,
        password: hash
    })
};

const findByUsername = async (username) =>{
    let user = await User.findOne({where: {username}})
    return user
};

const findById = async (id) =>{
    let user = await User.findOne({where: {id}})
    return user
};

const findAll = async () => {
    const users = await User.findAll()
    return users
};

module.exports = { 
    createUser,
    findAll,
    findByUsername,
    findById
};