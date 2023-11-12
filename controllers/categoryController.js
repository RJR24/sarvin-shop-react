const Category = require("../models/categoryModel");

const createCategory = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCategory = await Category.create({
      title,
      description,
    });

    return res
      .status(201)
      .send({ message: "category created successfully!", newCategory });
  } catch (error) {
    return res.status(500).send("Error creating category:", error);
  }
};
const getAllCategories = async (req, res) => {
  try {
    const categoriesList = await Category.findAll();
    return res.status(200).send(categoriesList);
  } catch (error) {
    return res.status(500).send("Error fetching categories:", error);
  }
};
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { title, description } = req.body;
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).send("category not found!");
    }

    (category.title = title),
      (category.description = description),
      await category.save();

    res.send({ message: "category updated successfully!", category });
  } catch (error) {
    console.log("Error updating category:", error);
    res.status(500).send("Internal server error");
  }
};

const removeCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).send({ message: "category not found!" });
    }
    await category.destroy();
    res.status(200).send({ message: "category removed successfully!" });
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
