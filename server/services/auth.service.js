const { encode } = require("../utils/jwt.util")
const { findByUsername } = require("./user.service")


const login = (params) =>{
    const {username, password} = params || {}
    let user = findByUsername(username)
    if(!user){
        throw new Error("username_not_found")
    }
    if(!password){
        throw new Error('password_invalid')
    }
    
    const payload = {
        userID: user.id
    }
    const token = encode(payload)

    delete user.password

    return {
        user,
        token,
    }
}

module.exports = {login}