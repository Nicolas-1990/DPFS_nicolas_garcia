const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");

const upload = require("../middlewares/multerUsers");

const registerValidator = require("../validations/registerValidator");
const loginValidator = require("../validations/loginValidator");

// LOGIN
router.get("/login", guestMiddleware, usersController.login);
router.post("/login", usersController.processLogin);

// REGISTER
router.get("/register", guestMiddleware, usersController.register);
router.post("/register", upload.single("avatar"), registerValidator, usersController.store);

// PROFILE
router.get("/profile", authMiddleware, usersController.profile);

// LOGOUT
router.get("/logout", authMiddleware, usersController.logout);

module.exports = router;