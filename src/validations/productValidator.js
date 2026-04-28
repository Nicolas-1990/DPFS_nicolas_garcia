const { body } = require("express-validator");

module.exports = [
  body("name")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isLength({ min: 5 }).withMessage("Debe tener al menos 5 caracteres"),

  body("description")
    .notEmpty().withMessage("La descripción es obligatoria")
    .isLength({ min: 20 }).withMessage("Debe tener al menos 20 caracteres"),

  body("price")
    .notEmpty().withMessage("El precio es obligatorio")
    .isNumeric().withMessage("Debe ser un número"),
];