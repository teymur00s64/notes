const { encode } = require("../utils/jwt.util")
const { findUser } = require("./user.service")


const login = (params) =>{
    const {username, password} = params || {}
    let user = findUser(username)
    if(!user){
        throw new Error("username_not_found")
    }
    if(!password !== user.password){
        throw new Error('password_invalid')
    }
    
    const payload = {
        userID: user.id
    }
    const token = encode(payload)

    return {
        user: {
            ...user.toJSON(),
            password: undefined,
        },
        token,
    }
}

module.exports = {login}