const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");


exports.signin = async (req, res) => {
    
    const {username, email, password} = req.body;

    //Email Validation Test
    const emailVerifyRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //Password Strength Validation Test
    //8 to 20 characters, at least one number, one uppercase, and lowercase letter
    const passwordVerifyRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if (emailVerifyRegex.test(email)) 
        throw "Inserire un indirizzo mail valido";

    if (password.lenght < 8)
        throw "La password deve essere di almeno 8 caratteri";
    if (passwordVerifyRegex.test(password))
        throw "La password deve contenere almeno un numero e contenere caratteri maiuscoli e minuscoli";


    const user = new User({username, email, password: sha256(password + process.env.SALT)}); //<-- Secure authentication
    await user.save();
    res.json({
        message: "Registrazione completata"
    })
}