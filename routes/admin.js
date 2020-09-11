const express = require("express");
const router = express.Router();

// Importing the controller for usage
const productController = require("../controllers/products");

// /admin/add-product => GET
// Handling the route using controller
router.get("/add-product", productController.getAddProduct);

// /admin/add-product => POST
// Handling the route using controller
router.post("/add-product", productController.postAddProduct);

module.exports = router;
