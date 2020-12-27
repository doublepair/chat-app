'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const messageSchema = new Schema({

    message: {
        type: String,
        required: "Messaggio"
    },

    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
        required: ""
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: ""
    }

})

module.exports = mongoose.model("Message", messageSchema);