const calculateShipping = (cart) => {

  const hasItems = cart.length > 0;

  const onlyDigital =
    hasItems &&
    cart.every(item => item.type === "digital");

  const shipping =
    !hasItems
      ? 0
      : onlyDigital
      ? 0
      : 1500;

  return {
    onlyDigital,
    shipping
  };
};

module.exports = calculateShipping;