module.exports = function (sequelize, dataTypes) {

    let alias = "Category";

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
        tableName: "categories",
        timestamps: false,
        underscored: true
    };

    let Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {

        Category.belongsToMany(models.Product, {
            as: "products",
            through: "product_category",
            foreignKey: "category_id",
            otherKey: "product_cat_id",
            timestamps: false
        });
        
    };

    return Category;
};