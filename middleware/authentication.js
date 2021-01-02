const jwt = require("jwt-then");

module.exports = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const verification = await jwt.verify(token, process.env.SECRET);

        req.verification = verification;

        if (!req.headers.authorization)
            throw "Autenticazione fallita";
        
        next();
    }
    
    catch(err){
        res.status(401).json({
            message: "Autenticazione fallita",
        })
    }
}