const User = require("../models/user-model")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//home logic
const home = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send("Welcome to home page");
  } catch (error) {
    res.status(404).send({ msg: "Page not found" });
  }
};

// Registration logic
const register = async (req, res) => {
    try {
      const{username, email, phone, password} = req.body;   //these will be used in finding emails by comparining it with db

      const userExist = await User.findOne({ email: email });
      if (userExist){
        return res.status(400).json({ msg: "email already exists"});
      }

      // const saltRound = 10;
      // const hash_password = await bcrypt.hash(password, saltRound);

      const newUser= await User.create({
        username, 
        email, 
        phone, 
        password //:hash_password
        });
        // console.log(req.body);
      res.status(201).json({
        msg: 'registration successful', 
        token: newUser.generateToken(),
        userId: newUser._id.toString(),
        }); //accessing 
    } catch (error) {
        res.status(500).json({ msg:'Page not found'});
    }
};

module.exports = { home, register };
