const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const isLoggedIn = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      return res.status(401).send("invalid token. user not found!");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Invalid token." + error);
  }
};

const isAdmin = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send("ACCESS DENIED! Admin permission needed.");
  }
  next();
};

module.exports = { isLoggedIn, isAdmin };
