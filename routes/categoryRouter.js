const express = require("express");
const {
  createCategory,
  getAllCategories,
  updateCategory,
  removeCategory,
} = require("../controllers/categoryController");

const categoryRouter = express.Router();

categoryRouter.post("/category", createCategory);
categoryRouter.get("/category", getAllCategories);
categoryRouter.put("/category/:id", updateCategory);
categoryRouter.delete("/category/:id", removeCategory);

module.exports = categoryRouter;
