module.exports = function (sequelize, dataTypes) {

    let alias = "Product_Category";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        product_cat_id: {
            type: dataTypes.INTEGER(10),
            notNull: true
        },
        category_id: {
            type: dataTypes.INTEGER(10),
            notNull: true
        }
    };

    let config = {
        tableName: "product_category",
        timestamps: false
    };

    let Product_Category = sequelize.define(alias, cols, config);

    return Product_Category;

}