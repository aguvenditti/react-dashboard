const { sequelize } = require('../database/models');
const db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {
    //get the count of users in db
    getQuantity : (req, res) => {
        db.User.count()
        .then( result => {
            return res.status(200).json(result);
        })
        .catch( err => { res.status(503).send(err) });
    },
};