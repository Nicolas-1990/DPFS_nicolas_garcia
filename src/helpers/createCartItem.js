module.exports = function createCartItem(product) {

  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
    type: product.type
  };
};