const express = require("express");
const router = express();

router.route("/").get((req,res)=> {
    res.status(200).send('Hello Babies');
});

router.route("/register").get((req,res)=>{
    res.status(200).send('Register Page ROUTER');
}); //can apply chaining as well
const PORT = 5000;

module.exports = router;