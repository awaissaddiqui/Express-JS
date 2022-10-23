const jwt = require("jsonwebtoken")
function verifyToken(req, res, next){
    const token = req.header("token")
    if(!token) return res.status(400).send("Token not found")

    try{
        const verified=jwt.verify(token, process.env.DB_USERSECRET);
        req.user= verified;
        next(); // call the next middle ware after this.
    }
    catch(err){
        res.status(400).send(err + "token error")
    }
}

module.exports = verifyToken;