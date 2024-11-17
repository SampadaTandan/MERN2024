const User = require("../models/user-model")

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
        return res.status(400).json({msg: "email already exists"});
      }
      const newUser= await User.create({username, email, phone, password});
        // console.log(req.body);
      res.status(200).json({data: newUser }); 
    } catch (error) {
        res.status(500).json('Page not found');
    }
};

module.exports = { home, register };
