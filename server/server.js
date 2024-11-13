const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.status(200).send("Welcome")
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running : ${PORT}`)
});