module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: DataTypes.STRING
  }, {
    tableName: "Categories",
    freezeTableName: true
  });

  Category.associate = function(models) {
    
    Category.hasMany(models.Product, {
      foreignKey: "category_id",
      as: "products"
    });
  };

  return Category;
};