const users = require("../models/usermodel");


// login

exports.loginController = async (req, res) => {
    
  // logic

  const { email, password } = req.body;
  console.log( email, password);

  try {
    const existingUser = await users.findOne({ email: email });
    if (existingUser) {
      res.status(406).json("Account already Exists");
    } else {
      const newUser = new users({
        email: email,
        password: password,
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};