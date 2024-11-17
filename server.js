require("dotenv").config();//to use env
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

app.use(express.json()); //to read json

app.use("/api/auth", router); //jumps to middleware

app.get("/", (req, res)=>{
    res.status(200).send("Welcome")
});


app.post("/register", (req, res)=>{
    res.status(200).send("Welcome to registration page");
});

const PORT = 5000;
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running : ${PORT}`)
    });
})