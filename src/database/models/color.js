module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define("Color", {
    name: DataTypes.STRING
  }, {
    tableName: "colors",
    freezeTableName: true,
    timestamps: false
  });

  return Color;
};