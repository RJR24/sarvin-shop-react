const express = require("express");
const { signUp, login, logout } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/signUp", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
// authRouter.put("/forgotPassword", updateProduct);
// authRouter.delete("/changePassword", removeProduct);

module.exports = authRouter;
