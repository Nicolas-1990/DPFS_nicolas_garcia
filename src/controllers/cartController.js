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

    if (existing) {

      if (existing.quantity >= dbProduct.stock) {
        return res.json({
          success: false,
          message: "Sin stock disponible"
        });
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
    cart
  });
},

view: function(req, res) {
  const cart = req.session.cart || [];

  let total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const hasItems = cart.length > 0;

  const onlyDigital = hasItems && cart.every(item => item.type === "digital");

  const shipping = !hasItems ? 0 : (onlyDigital ? 0 : 1500);

  const finalTotal = total + shipping;

  return res.render("products/productCart", {
    cart,
    total,
    onlyDigital,
    shipping,
    finalTotal
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
      cart
    });
  }

  const dbProduct = await db.Product.findByPk(productId);

  if (product.quantity >= dbProduct.stock) {
    return res.json({
      success: false,
      message: "Sin stock disponible"
    });
  }

  product.quantity++;

  req.session.cart = cart;

  return res.json({
    success: true,
    message: "✔ Cantidad actualizada",
    cart
  });
},

  decrease: (req, res) => {

  const id = req.params.id;
  let cart = req.session.cart || [];

  const item = cart.find(p => p.id == id);

  if (!item) {
    return res.json({ success: false });
  }

  if (item.type === "digital") {
    return res.json({
      success: false,
      message: "Producto digital (cantidad fija)",
      cart
    });
  }

  if (item.quantity > 1) {
    item.quantity--;
  }

  req.session.cart = cart;

  return res.json({
    success: true,
    message: "✔ Cantidad actualizada",
    cart
  });
},

  delete: (req, res) => {

  const id = req.params.id;
  let cart = req.session.cart || [];

  const newCart = cart.filter(item => item.id != id);

  req.session.cart = newCart;

  return res.json({
    success: true,
    message: "Producto eliminado",
    cart: newCart
  });
},


  clear: (req, res) => {

  const cart = req.session.cart || [];

  if (!req.session.user) {
  return res.json({
    success: false,
    message: "Debes iniciar sesión para comprar"
    });
  }

  if (cart.length === 0) {
    return res.json({
      success: false,
      message: "El carrito está vacío"
    });
  }

  req.session.cart = [];

  return res.json({
    success: true,
    message: "Compra realizada con éxito 🎉",
    cart: []
  });
}

};