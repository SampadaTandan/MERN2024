const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth", router) //jumps to middleware
app.get("/", (req, res)=>{
    res.status(200).send("Welcome")
});
app.get("/register", (req, res)=>{
    res.status(200).send("Welcome to registration page");
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running : ${PORT}`)
});