module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  image: DataTypes.STRING,
  images: {
  type: DataTypes.TEXT,
  allowNull: true
  },
  stock: DataTypes.INTEGER,
  type: DataTypes.STRING,
  discount: DataTypes.INTEGER,
  category_id: DataTypes.INTEGER,
  brand_id: DataTypes.INTEGER
  });

Product.associate = function(models){

Product.belongsTo(models.Category,{
foreignKey:"category_id",
as:"category"
});

Product.belongsTo(models.Brand,{
foreignKey:"brand_id",
as:"brand"
});

Product.belongsToMany(models.Color,{
through: "productcolors",
foreignKey:"product_id",
otherKey:"color_id",
as:"colors"
});
  };

  return Product;
};