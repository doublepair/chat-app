const router = require("express").Router();
const conversationController = require("../controllers/conversationController");
const authentication = require("../middleware/authentication");

router.post("/conversation", authentication, conversationController.newConversation);

module.exports = router;