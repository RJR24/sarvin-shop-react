const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.get("/products", getAllProducts);
productRouter.post("/products", createProduct);
productRouter.put("/products", updateProduct);
productRouter.delete("/products", removeProduct);

module.exports = productRouter;
