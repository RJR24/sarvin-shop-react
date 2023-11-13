const User = require("../models/userModel");

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findByPk(userId, {
      attributes: ["id", "fullName", "email"],
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.status(200).send(user);
  } catch (error) {
    console.log("Error fetching user profile:", error);
    return res.status(500).send("Internal server error");
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const { fullName, email } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    user.fullName = fullName || user.fullName;
    user.email = email || user.email;

    await user.save();

    return res.status(200).send("User profile updated successfully!");
  } catch (error) {
    console.error("Error updating user profile:", error);
    return res.status(500).send("Internal server error");
  }
};

module.exports = { getUserProfile, updateUserProfile };
