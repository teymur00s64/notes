const { authService } = require("../services");

const signIn = async (req, res) =>{
    const params = req.body
    try {
        let result = await authService.login(params)
       
        res.status(200).json(result)
    } catch (error) {
        switch (error?.message) {
            case "username_not_found":
                res.status(404).json({message: "username not here"})
                break;
            
            case "password_invalid":
                res.status(400).json({message: "password invalid"})
                break;

            default:
                res.status(500).json({message: error?.message})
                break;
        }
    }
};

module.exports = {signIn}