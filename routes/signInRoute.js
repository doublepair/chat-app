const router = require("express").Router();
const signInController = require("../controllers/signInController");

router.post("/signin", signInController.signin);

module.exports = router;