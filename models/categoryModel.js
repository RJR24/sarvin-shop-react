const { DataTypes } = require("sequelize");
const sq = require("../config/db");

const Category = sq.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      field: "id",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  // parentId: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  // },
  {
    hooks: {
      beforeValidate: () => {},
      beforeCreate: () => {},
    },
  }
);


module.exports = Category;
