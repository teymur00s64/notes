const AppError = require("./app.error");

class NotFound extends AppError{
    constructor(error){
        super(message, 404)
    }
}

module.exports = NotFound