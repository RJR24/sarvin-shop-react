const express = require("express");
const { isLoggedIn, isAdmin } = require("../middlewares/auth");
const userDashboard = require("../controllers/userController");
const router = express.Router();

router.use("/userDashboard", isLoggedIn, userDashboard);
// router.use("/", );
// router.use("/", isLoggedIn, isAdmin, adminRouter);

module.exports = router;
