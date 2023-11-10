const express = require("express");
const router = express.Router();


router.use("/auth", authRouter);

router.use("/user", isLoggedIn, userRouter);
router.use("/admin", isLoggedIn, isAdmin, adminRouter);


module.exports = router;
