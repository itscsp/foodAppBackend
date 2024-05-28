import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist. Please Register." });
    }

    //Checking password with hashed password.
    const isMatch = await bcrypt.compare(password, user.password)

    // Checking password is correct or not
    if(!isMatch){
      return res.json({ success: false, message: "Invaild credentials" });
    }

    // Generating new password for login user
    const token = createToken(user._id)
    res.json({success:true, token})

  } catch(error) {
    console.log(error)
    res.json({
        success:true,
        message: 'Error'
    })
  }
};

// register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    //Checking is user already exist
    const exist = await userModel.findOne({ email });

    if (exist) {
      return res.json({ success: false, message: "User Alredy exists" });
    }

    //validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    //Checking for strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Creating new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Save user in database
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// Generate token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export { loginUser, registerUser };
