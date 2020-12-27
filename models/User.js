'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    username: {
        type: String,
        required: "Inserire il nome utente"
    },

    email: {
        type: String,
        required: "Inserire l'indirizzo eMail"
    },

    password: {
        type: String,
        required: "Inserire la password"
    },

},

    {
        timestamps: true,
    }

)

module.exports = mongoose.model("User", userSchema);