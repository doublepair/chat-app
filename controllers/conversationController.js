const mongoose = require("mongoose");
const Conversation = mongoose.model("Conversation");

exports.newConversation = async (req, res) => {

    const {name} = req.body;

    const conversation = new Conversation({
        name,
    })

    await conversation.save();

    res.json({
        message: "Conversazione creata correttamente"
    })   
}