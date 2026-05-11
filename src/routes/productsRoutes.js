const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const productValidator = require("../validations/productValidator");

// Home
router.get("/", productsController.home);

// Listado
router.get("/products", productsController.index);

// Crear
router.get("/products/create", adminMiddleware, productsController.createForm);
router.post("/products", adminMiddleware, productValidator, productsController.store);

// Editar
router.get("/products/:id/edit", adminMiddleware, productsController.editForm);
router.put('/products/:id', adminMiddleware, productValidator, productsController.update);

// Eliminar
router.delete("/products/:id", adminMiddleware, productsController.destroy);

// Detalle
router.get("/products/:id", productsController.detail);

module.exports = router;