// require user model
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// POST/api/login
const validateLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ success:false, message: "Invalid email or password" });
    }
    // compare the password
    // user.matchPassword(password)
    const isMatch = await existingUser.matchPassword(password)
    // const isMatch = await bcrypt.(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({success:false,  message: "Invalid email or password" });
    }
    // and then create json web token
    // Before token generation
    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.MEHR_E_AMAN_SECRET_KEY,
      { expiresIn: "1d" }
    );
    // now find the user
    res.status(200).json({
        success:true,
        token,
        user: {
          name: existingUser.name,
          email: existingUser.email,
          phone: existingUser.phone,
          address: existingUser.address,
          _id: existingUser._id,
        },
      });
  } catch (error) {
    res.status(500).json({success:false, message: "Server error" });
  }
};
module.exports = validateLogin;
