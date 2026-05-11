const cors = require("cors");
const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const rememberMiddleware = require("./src/middlewares/rememberMiddleware");
const userLoggedMiddleware = require("./src/middlewares/userLoggedMiddleware");
const methodOverride = require('method-override');

const usersAPIRoutes = require('./src/routes/api/users');
const productsAPIRoutes = require('./src/routes/api/products');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(cookieParser());

app.use(session({
    secret: "mi_secreto_super_seguro",
    resave: false,
    saveUninitialized: false
}));

app.use(rememberMiddleware);
app.use(userLoggedMiddleware);

app.use('/api/users', usersAPIRoutes);
app.use('/api/products', productsAPIRoutes);
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use((req, res, next) => {
  res.locals.userLogged = req.session.userLogged || null;
  res.locals.error = null;

  const cart = req.session.cart || [];

  res.locals.totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);

  next();
});

app.use((req,res,next)=>{

  const excludedRoutes = [
    "/users/login",
    "/login",
    "/users/register",
    "/register"
  ];

  if (!excludedRoutes.includes(req.url)) {
    req.session.lastPage = req.url;
  }

  next();

});

app.get("/login", (req, res) => {
  res.redirect("/users/login");
});

app.get("/register", (req, res) => {
  res.redirect("/users/register");
});

app.use("/cart", require("./src/routes/cart"));

const productsRoutes = require("./src/routes/productsRoutes");
app.use("/", productsRoutes);

const usersRoutes = require("./src/routes/users");
app.use("/users", usersRoutes);

const cartRoutes = require("./src/routes/cart");

app.use("/cart", cartRoutes);

app.listen(3002, () => {
  console.log("Servidor en http://localhost:3002");
});