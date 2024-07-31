const {AppError} = require('../errors/index')

const errorMiddleware = (error, req, res, next) =>{
    if(error instanceof AppError)
    {
        return res.status(error.statusCode).json({message: error.message})
    }
    console.error(error)
    res.status(500).json("Internal Server Error")
}

module.exports = {
    errorMiddleware
}