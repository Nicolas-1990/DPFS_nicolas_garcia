const getCart = (req) => {
  return req.session.cart || [];
};

const saveCart = (req, cart) => {
  req.session.cart = cart;
};

const cartResponse = (
  success,
  message,
  type,
  cart
) => {

  return {
    success,
    message,
    type,
    cart
  };
};

module.exports = {
  getCart,
  saveCart,
  cartResponse
};