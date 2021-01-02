require("dotenv").config();

//EXPRESS
const express = require("express");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//MONGODB
require("./models/User");
require("./models/Conversation");
require("./models/Message");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/chatapp' , {  //<--DB
    useUnifiedTopology: true,
    useNewUrlParser: true,
});  

mongoose.connection.on("error", (err) => {
    console.log("FAILED CONNECTION TO DATABASE");
})

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
})


//ROUTES
app.use("/signin", require("./routes/signInRoute"));
app.use("/login", require("./routes/logInRoute"));
app.use("/conversation", require("./routes/conversationRoute"));



const PORT = /*process.env.PORT ||*/ 3000;  //<-- PORT

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
})

module.exports = app;

