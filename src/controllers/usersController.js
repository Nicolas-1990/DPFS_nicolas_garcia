const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");

const usersController = {

    login: (req, res) => {

    res.render("users/login", {
        errors: {},
        redirect: req.query.redirect || ""
    });

},
    
    processLogin: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render("users/login", {
            errors: errors.mapped(),
            oldData: req.body
        });
    }

    try {
        const userToLogin = await db.User.findOne({
            where: { email: req.body.email }
        });

        if (!userToLogin) {
            return res.render("users/login", {
                errors: {
                    email: { msg: "Email no registrado" }
                },
                oldData: req.body
            });
        }

        const isOk = bcrypt.compareSync(
            req.body.password,
            userToLogin.password
        );

        if (!isOk) {
            return res.render("users/login", {
                errors: {
                    password: { msg: "Contraseña incorrecta" }
                },
                oldData: req.body
            });
        }

        req.session.userLogged = userToLogin;

        if (req.body.remember) {
            res.cookie("userEmail", userToLogin.email, {
                maxAge: 1000 * 60 * 60 * 24
            });
        }

        const redirectTo = req.body.redirect || "/products";

        return res.redirect(redirectTo);

    } catch (error) {
        console.error("❌ ERROR LOGIN:", error);
        return res.status(500).send("Error interno");
    }
},

register: (req, res) => {
  res.render("users/register", {
    errors: {},
    oldData: {}
  });
},

    store: async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("users/register", {
        errors: errors.mapped(),
        oldData: req.body
      });
    }

    const userInDB = await db.User.findOne({
      where: { email: req.body.email }
    });

    if (userInDB) {
      return res.render("users/register", {
        errors: {
          email: { msg: "Este email ya está registrado" }
        },
        oldData: req.body
      });
    }

    await db.User.create({
      first_name: req.body.name,
      last_name: req.body.apellido,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.file ? req.file.filename : "default.png",
      role: "user"
    });

    return res.redirect("/users/login");

  } catch (error) {
    console.error("❌ ERROR REGISTER:", error);
    return res.status(500).send("Error interno");
  }
},

    profile: (req,res)=>{
        res.render("users/profile");
    },

    logout: (req,res)=>{
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    }

};

module.exports = usersController;