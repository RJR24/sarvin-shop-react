const User = require("../models/userModel");

const signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const user = await User.create({
      email,
      password,
      username,
    });

    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send("internal server error!" + error);
  }
};
const GetAllUsers = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const user = await User.create({
      email,
      password,
      username,
    });

    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send("internal server error!" + error);
  }
};

const createProduct = (req, res) => {
  const newProduct = {
    id: 6,
    title: "mobile",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  res.send({ message: "product created successfully!", newProduct });
};

const updateProduct = (req, res) => {
  const updatedProduct = {
    id: 6,
    title: "mobile",
    price: 100,
  };

  res.send({ message: "product updated successfully!", updatedProduct });
};

const removeProduct = (req, res) => {
  res.send({ message: "product deleted successfully!" });
};

module.exports = {
  signUp,
  // createProduct,
  // updateProduct,
  // removeProduct,
};
