'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const conversationSchema = new Schema({

    name: {
        type: String,
        required: "Inserire il nome conversazione"
    }

})

module.exports = mongoose.model("Conversation", conversationSchema);