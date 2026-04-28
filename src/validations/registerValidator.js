const { body } = require("express-validator");
const db = require("../database/models");

module.exports = [

  body("name")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isLength({ min: 2 }).withMessage("Mínimo 2 caracteres"),

  body("email")
    .notEmpty().withMessage("Email obligatorio")
    .isEmail().withMessage("Formato inválido")
    .custom(async (value) => {

      const user = await db.User.findOne({
        where: { email: value }
      });

      if (user) {
        throw new Error("Este email ya está registrado");
      }

      return true;
    }),

  body("password")
    .notEmpty().withMessage("Contraseña obligatoria")
    .isLength({ min: 8 }).withMessage("Mínimo 8 caracteres"),

  body("confirmPassword")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    })

];