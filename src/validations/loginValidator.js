const { body } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

module.exports = [

  body("email")
    .notEmpty().withMessage("Email obligatorio")
    .isEmail().withMessage("Formato inválido")
    .custom(async (value, { req }) => {

      const user = await db.User.findOne({
        where: { email: value }
      });

      if (!user) {
        throw new Error("Email no registrado");
      }

      req.user = user; // lo guardamos para usarlo después
      return true;
    }),

  body("password")
    .notEmpty().withMessage("Contraseña obligatoria")
    .custom((value, { req }) => {

      if (!req.user) return true;

      const valid = bcrypt.compareSync(value, req.user.password);

      if (!valid) {
        throw new Error("Contraseña incorrecta");
      }

      return true;
    })

];