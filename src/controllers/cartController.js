const cartTotals = require("../helpers/cartTotals");
const cartResponse = require("../helpers/cartResponse");
const db = require("../database/models");

module.exports = {

  add: async (req, res) => {
  const productId = req.params.id;
  const cart = req.session.cart || [];

  const dbProduct = await db.Product.findByPk(productId);

  if (!dbProduct) {
    return res.json({ success: false });
  }

  const existing = cart.find(p => p.id == productId);

  if (dbProduct.type === "digital") {

    if (existing) {
      return res.json({
        success: false,
        message: "Este producto ya está en el carrito",
        type: "error",
        cart
      });
    }

    cart.push({
      id: dbProduct.id,
      name: dbProduct.name,
      price: dbProduct.price,
      image: dbProduct.image,
      quantity: 1,
      type: dbProduct.type
    });

  } else {

    if (dbProduct.stock === 0) {
      return cartResponse(
        res,
        false,
        "Producto sin stock",
        "error",
        cart
      );
    }

    if (existing) {

    if (existing && existing.quantity >= dbProduct.stock) {
      return cartResponse(
        res,
        false,
        "Sin stock disponible",
        "error",
        cart
      );
    }

      existing.quantity++;

    } else {

      cart.push({
        id: dbProduct.id,
        name: dbProduct.name,
        price: dbProduct.price,
        image: dbProduct.image,
        quantity: 1,
        type: dbProduct.type
      });

    }
  }

  req.session.cart = cart;

  return res.json({
    success: true,
    message: "✔ Producto agregado",
    type: "success",
    cart
  });
},

view: (req, res) => {

  const cart = req.session.cart || [];

  const totals = cartTotals(cart);

  return res.render("products/productCart", {
    cart,
    ...totals
  });
},

  increase: async (req, res) => {
  const productId = req.params.id;
  const cart = req.session.cart || [];

  const product = cart.find(p => p.id == productId);

  if (!product) {
    return res.json({ success: false });
  }

  if (product.type === "digital") {
    return res.json({
      success: false,
      message: "Producto digital (cantidad fija)",
      type: "error",
      cart
    });
  }

  const dbProduct = await db.Product.findByPk(productId);

  if (product.quantity >= dbProduct.stock) {
    return res.json({
      success: false,
      message: "Sin stock disponible",
      type: "error",
      cart
    });
  }

  product.quantity++;

  req.session.cart = cart;

  return res.json({
    success: true,
    message: "✔ Cantidad actualizada",
    type: "success",
    cart
  });
},

  decrease: (req, res) => {

  const id = req.params.id;
  let cart = req.session.cart || [];

  const item = cart.find(p => p.id == id);

  if (!item) {
    return res.json({
    success: false,
    message: "Producto no encontrado",
    type: "error",
    cart
  });
}

  if (item.type === "digital") {
    return res.json({
      success: false,
      message: "Producto digital (cantidad fija)",
      type: "error",
      cart
    });
  }

  if (item.quantity > 1) {
    item.quantity--;

    if (item.quantity === 1) {
      req.session.cart = cart;

      return res.json({
        success: true,
        message: "⚠️ Stock mínimo alcanzado",
        type: "warning",
        cart
      });
    }
  }

  req.session.cart = cart;

  return res.json({
    success: true,
    message: "✔ Cantidad actualizada",
    type: "success",
    cart
  });
},

checkout: (req, res) => {

  const cart = req.session.cart || [];

  if (cart.length === 0) {
    return res.redirect("/cart");
  }

  const totals = cartTotals(cart);

  res.render("products/checkout", {
    cart,
    ...totals
  });
},

processCheckout: async (req, res) => {

  const cart = req.session.cart || [];

  for (const item of cart) {

    const product = await db.Product.findByPk(item.id);

    if (product && product.type !== "digital") {

      if (product.stock < item.quantity) {
        return res.redirect("/cart");
      }

      product.stock -= item.quantity;

      await product.save();
    }
  }

  req.session.cart = [];

  res.render("products/checkoutSuccess");
},

  delete: (req, res) => {

  const id = req.params.id;
  let cart = req.session.cart || [];

  const newCart = cart.filter(item => item.id != id);

  req.session.cart = newCart;

  return res.json({
    success: true,
    message: "Producto eliminado",
    type: "error",
    cart: newCart
  });
},


  clear: (req, res) => {

  const cart = req.session.cart || [];

  if (!req.session.userLogged) {
  return res.json({
    success: false,
    message: "Debes iniciar sesión para comprar",
    type: "warning",
    cart
    });
  }

  if (cart.length === 0) {
    return res.json({
      success: false,
      message: "El carrito está vacío",
      type: "warning",
      cart
    });
  }

  req.session.cart = [];

  return res.json({
    success: true,
    message: "Compra realizada con éxito 🎉",
    type: "success",
    cart: []
  });
}

};