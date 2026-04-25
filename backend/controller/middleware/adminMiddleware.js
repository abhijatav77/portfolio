import jwt from 'jsonwebtoken'

export const isAuthenticated = async(req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            success: false,
            message: "Access denied"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded;
        next()
    } catch (error) {   
        return res.status(401).json({
            success: false,
            message: error.message
        })
    }
}