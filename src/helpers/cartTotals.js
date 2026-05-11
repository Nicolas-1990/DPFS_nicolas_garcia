const calculateShipping = require("./shippingHelper");

module.exports = function cartTotals(cart) {

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const {
    onlyDigital,
    shipping
  } = calculateShipping(cart);

  return {
    total,
    onlyDigital,
    shipping,
    finalTotal: total + shipping
  };
};