const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const tokenBlacklist = require("./tokenBlackList");
const TokenBlackList = require("../models/tokenBlackList");


const signUp = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send("user with the given email already exist!");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName,
    });

    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(500).send("internal server error!" + error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send("invalid email or password!");
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).send("user logged in successfully!" + token);
  } catch (error) {
    return res.status(500).send("internal server error!" + error);
  }
};
const logout = async (req, res) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send("No token provided!");
  }

  // Add the token to the blacklist
  await TokenBlackList.create({token});

  return res.status(200).send("user logged out successfully!");
};
module.exports = {
  signUp,
  login,
  logout,
};
