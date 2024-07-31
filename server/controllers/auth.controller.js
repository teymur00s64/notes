const { authService } = require("../services");

const signIn = async (req, res, next) =>{
    try {
      const params = req.body
        let result = await authService.login(params)
       
        res.status(200).json(result)   
    } catch (error) {
      next(error)  
    }
    
};

module.exports = {signIn}