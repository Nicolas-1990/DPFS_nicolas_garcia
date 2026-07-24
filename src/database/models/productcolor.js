module.exports = (sequelize, DataTypes) => {

  const ProductColor = sequelize.define("ProductColor", {

  }, {
    tableName: "productcolors",
    freezeTableName: true,
    timestamps: false
  });

  return ProductColor;
};