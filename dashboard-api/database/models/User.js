module.exports = function (sequelize, dataTypes) {

    let alias = "User";

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
        tableName: "users",
        timestamps: false,
        underscored: true
    };

    let User = sequelize.define(alias, cols, config);

    return User;
};