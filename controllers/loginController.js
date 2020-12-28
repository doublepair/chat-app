const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {

    const token = jwt.sign(
        {id: user.id},
        process.env.SECRET);

    const {email, password} = req.body;
    const user = await User.findOne({email, password: sha256(password + process.env.SALT)})

    if(!user) 
        throw "eMail o password sbagliata";
    
    res.json({
        message: "Utente autenticato correttamente",
        token
    })
}

