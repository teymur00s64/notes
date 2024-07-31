const AppError = require("./app.error");

class Validation extends AppError{
    constructor(message){
        super(message, 401)
    }
}

module.exports = Validation