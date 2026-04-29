const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, cartController.view);
router.post("/add/:id", authMiddleware, cartController.add);
router.post("/increase/:id", authMiddleware, cartController.increase);
router.post("/decrease/:id", authMiddleware, cartController.decrease);
router.post("/delete/:id", authMiddleware, cartController.delete);
router.post("/clear", authMiddleware, cartController.clear);

module.exports = router;