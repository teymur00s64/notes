const { userService } = require('../services')
const { decode } = require('../utils/jwt.util')

const authMiddleware = async (req, res, next) => {
    let token = req.headers.authorization
    
    if (!token?.includes("Bearer ")) {
        return res.status(401).json({ message: "Token is not defined" })
    }
    
    token = token.split(" ")[1]
    
    const result = decode(token)

    if (!result?.userId) {
        return res.status(401).json({ message: "Token is invalid" })
    }

    const user = await userService.findById(result.userId)

    if (!user) {
        return res.status(401).json({ message: "User not found" })
    }

    req.user = user

    next()
}

module.exports = authMiddleware