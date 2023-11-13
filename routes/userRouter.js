const express = require("express");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");
const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.put("/profile", isLoggedIn, updateUserProfile);
userRouter.get("/profile", isLoggedIn, getUserProfile);

module.exports = userRouter;
