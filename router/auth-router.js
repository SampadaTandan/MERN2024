const express = require("express");
const authcontrollers = require("../controllers/auth-controller.js");
const router = express();

router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register); //can apply chaining as well
const PORT = 5000;

module.exports = router;