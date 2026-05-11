module.exports = function cartResponse(
  res,
  success,
  message,
  type,
  cart
) {

  return res.json({
    success,
    message,
    type,
    cart
  });
};