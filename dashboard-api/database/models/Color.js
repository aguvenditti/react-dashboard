module.exports = function (sequelize, dataTypes) {

    let alias = "Color";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(500),
            allowNull: false,
        }
    };

    let config = {
        tableName: "colors",
        timestamps: false,
        underscored: true
    };

    let Color = sequelize.define(alias, cols, config);

    Color.associate = function (models) {

        Color.belongsToMany(models.Product, {
            as: "products",
            through: "product_category",
            foreignKey: "color_id",
            otherKey: "product_id",
            timestamps: false
        });
        
    };

    return Color;
};