const db = require("../database/models");

async function rememberMiddleware(req, res, next) {

  if (req.cookies.userEmail && !req.session.userLogged) {

    const user = await db.User.findOne({
      where: { email: req.cookies.userEmail }
    });

    if (user) {
      req.session.user = user;
    }
  }

  next();
}

module.exports = rememberMiddleware;