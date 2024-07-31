const bcrypt = require('bcrypt')

const hashPass = (password) => {

    return bcrypt.hash(password, 10)
};

const verifyPass = (password, hash) =>{

    return bcrypt.compare(password, hash)
};

module.exports = {
    hashPass,
    verifyPass
}