module.exports = function (sequelize, dataTypes) {

    let alias = "Product_Color";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        product_id: {
            type: dataTypes.INTEGER(10),
            notNull: true
        },
        color_id: {
            type: dataTypes.INTEGER(10),
            notNull: true
        }
    };

    let config = {
        tableName: "product_color",
        timestamps: false
    };

    let Product_Color = sequelize.define(alias, cols, config);

    return Product_Color;

}