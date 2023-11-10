const express = require("express");
const { signUp } = require("../controllers/authController");


const authRouter = express.Router();

authRouter.post("/signUp", signUp);
// authRouter.post("/login", createProduct);
// authRouter.put("/forgotPassword", updateProduct);
// authRouter.delete("/changePassword", removeProduct);

module.exports = authRouter;
