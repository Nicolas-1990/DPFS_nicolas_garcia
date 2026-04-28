module.exports = (sequelize, DataTypes) => {

  const Color = sequelize.define("Color", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    tableName: "colors",
    timestamps: true
  });

  Color.associate = function(models) {
    Color.belongsToMany(models.Product, {
      through: "productcolors",
      foreignKey: "color_id",
      otherKey: "product_id",
      as: "products"
    });
  };

  return Color;
};