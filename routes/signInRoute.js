const router = require("express").Router();
const signInController = require("../controllers/signInController");

router.post("/", signInController.signin);

module.exports = router;