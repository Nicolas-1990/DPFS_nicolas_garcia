module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define("Brand", {
    name: DataTypes.STRING
  }, {
    tableName: "brands",
    freezeTableName: true

  });
  
  Brand.associate = function(models){

Brand.hasMany(models.Product,{
foreignKey:"brand_id",
as:"products"
});

};

  return Brand;
};