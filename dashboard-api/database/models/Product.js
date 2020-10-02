module.exports = function (sequelize, dataTypes) {

    let alias = "Product";

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
        },
        price: {
            type: dataTypes.DECIMAL(6, 1).UNSIGNED,
            allowNull: false,
        },
        stock: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING(500),
            allowNull: false,
        }
    };

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    };

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {

        Product.belongsToMany(models.Category, {
            as: "categories",
            through: "product_category",
            foreignKey: "product_cat_id",
            otherKey: "category_id",
            timestamps: false
        });

        Product.belongsToMany(models.Color, {
            as: "colors",
            through: "product_color",
            foreignKey: "product_id",
            otherKey: "color_id",
            timestamps: false
        });
    };

    return Product;
};