const Product = require("../models/productModel");
const createProduct = async (req, res) => {
  try {
    const { title, price, description, category, image, rating, count } =
      req.body;
    const newProduct = await Product.create({
      title,
      price,
      description,
      category,
      image,
      rating,
      count,
    });

    return res
      .status(201)
      .send({ message: "product created successfully!", newProduct });
  } catch (error) {
    return res.status(500).send("something went wrong!" + error);
  }
};
const getAllProducts = async (req, res) => {
  try {
    const productsList = await Product.findAll();
    return res.send(productsList);
  } catch (error) {
    return res.send("could not return the product list! + error");
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { title, price, description, category, image, rating, count } =
      req.body;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).send("product not found!");
    }

    (product.title = title),
      (product.price = price),
      (product.description = description),
      (product.category = category),
      (product.image = image),
      (product.rating = rating),
      (product.count = count),
      await product.save();

    res.send({ message: "product updated successfully!", product });
  } catch (error) {
    console.log("Error updating product:", error);
    res.status(500).send("Internal server error");
  }
};

const removeProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).send({ message: "product not found!" });
    }
    await product.destroy();
    res.status(200).send({ message: "product deleted successfully!" });
  } catch (error) {
    res.status(500).send({ message: "internal error:" + error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  removeProduct,
};
