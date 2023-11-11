const Category = require("../models/categoryModel");

const createCategory = async (req, res) => {
  try {
    const { title, description, parentId, permissions } = req.body;
    const newCategory = await Category.create({
      title,
      description,
      parentId,
      permissions,
    });

    return res
      .status(201)
      .send({ message: "product created successfully!", newCategory });
  } catch (error) {
    return res.status(500).send("Error creating category:", error);
  }
};
const getAllCategories = async (req, res) => {
  try {
    const categoriesList = await Category.findAll();
    return res.send(productsList);
  } catch (error) {
    return res.send("could not return the product list! + error");
  }
};
const updateCategory = async (req, res) => {
  try {
    const productId = req.params.id;
    const { title, price, description, category, image, rating, count } =
      req.body;
    const product = await Category.findByPk(productId);
    if (!product) {
      return res.status(404).send("user not found!");
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

const removeCategory = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Category.findByPk(productId);
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
  createCategory,
  getAllCategories,
  updateCategory,
  removeCategory,
};
