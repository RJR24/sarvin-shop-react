const { DataTypes } = require("sequelize");
const sq = require("../config/db");

const User = sq.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Username cannot be empty.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Email address already in use.",
      },
      validate: {
        isEmail: {
          msg: "Invalid email address.",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, undefined],
          msg: "Password must be at least 5 characters long.",
        },
      },
    },
  },
  {
    hooks: {
      beforeValidate: (user) => {},
      beforeCreate: (user) => {},
    },
  }
);

sq.sync({ force: true }).then(() => {
  console.log("Tables have been created");
});

module.exports = User;
