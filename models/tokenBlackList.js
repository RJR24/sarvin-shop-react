const { DataTypes } = require("sequelize");
const sq = require("../config/db");

const TokenBlackList = sq.define("TokenBlackList", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = TokenBlackList;
