const express = require("express");
const authcontrollers = require("../controllers/auth-controller.js");
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware.js");

const router = express();

router.route("/").get(authcontrollers.home);

router
.route("/register")
.post(validate(signupSchema), authcontrollers.register); //can apply chaining as well
router.route("/login").post(authcontrollers.login); 
const PORT = 5000;

module.exports = router;