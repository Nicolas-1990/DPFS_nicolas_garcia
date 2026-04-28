const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const usersController = require("../controllers/usersController");
const productValidator = require("../validations/productValidator");
const cartController = require("../controllers/cartController");

router.get("/", productsController.home);
router.get("/products", productsController.index);
router.get("/products/create", adminMiddleware, productsController.createForm);
router.post("/products", adminMiddleware, productValidator, productsController.store);
router.get("/products/:id/edit", adminMiddleware, productsController.editForm);
router.post("/products/:id/delete", adminMiddleware, productsController.destroy);
router.post("/products/:id", adminMiddleware, productValidator, productsController.update);
router.get("/products/:id", productsController.detail);

module.exports = router;