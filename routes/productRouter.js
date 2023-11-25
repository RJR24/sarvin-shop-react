const express = require("express");
const {
  createProduct,
  getAllProducts,
  updateProduct,
  removeProduct,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.post("/products", createProduct);
productRouter.get("/products", getAllProducts);
productRouter.put("/products/:id", updateProduct);
productRouter.delete("/products/:id", removeProduct);

module.exports = productRouter;
