const { DataTypes } = require("sequelize");
const sq = require("../config/db");

const Product = sq.define(
  "Product",
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
      validate: {
        notEmpty: {
          msg: "ProductTitle cannot be empty.",
        },
      },
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,

      validate: {
        notEmpty: {
          msg: "please enter the price!",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },

  {
    hooks: {
      beforeValidate: (product) => {},
      beforeCreate: (product) => {},
    },
  }
);



module.exports = Product;
