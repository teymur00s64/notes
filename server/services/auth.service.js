const  {ValidationError}  = require("../errors/index")
const { encode } = require("../utils/jwt.util")
const { findByUsername } = require("./user.service")

const login = async (params) =>{
    const {username, password} = params || {}
    let user = await findByUsername(username)

    if(!user){
        throw new ValidationError("username_not_found")
    }
    if(!password){
        throw new ValidationError('password_invalid')
    }
    
    const payload = {
        userId: user.id
    }

    const token = encode(payload)
    
    delete user.password

    return {
        user,
        token,
    }
}

module.exports = {login}