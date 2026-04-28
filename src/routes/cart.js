const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cartController");

router.get("/", cartController.view);
router.post("/add/:id", cartController.add);
router.post("/increase/:id", cartController.increase);
router.post("/decrease/:id", cartController.decrease);
router.post("/delete/:id", cartController.delete);
router.post("/clear", cartController.clear);

module.exports = router;