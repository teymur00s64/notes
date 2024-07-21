const { userService } = require("../services");

const createUser = async (req,res) =>{
    try {
    console.log(req.body)
    let user = await userService.createUser(req.body)
    res.json( {
        status: true,
        message:"user created",
        user
    })} catch (error) {
       res.status(409).json({
        message: err?.message
       }) 
    }
};

const findAll = async (req, res) =>{
    try {
        let users = await userService.findAll()
        res.json({users})
    } catch (error) {
        res.status(500).json({
            message: err?.message
        })
    }
};

module.exports = {
    createUser,
    findAll, 
};