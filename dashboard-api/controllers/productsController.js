const { sequelize } = require('../database/models');
const db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {
    //get all products from db with all colors and categories
    getAll : (req, res) => {
        db.Product.findAll(
            {
                include: [{
                    all: true
                }]
            }
        )
        .then( result => {
            return res.status(200).json(result);
        })
        .catch( err => { res.status(503).send(err) });
    },

    //get the count of products in db
    getQuantity : (req, res) => {
        db.Product.count()
        .then( result => {
            return res.status(200).json(result);
        })
        .catch( err => { res.status(503).send(err) });
    },

    //get the total price of products in db
    getPrice : (req, res) => {
        db.Product.sum('price')
        .then( result => {
            return res.status(200).json(result);
        })
        .catch( err => { res.status(503).send(err) });
    },

    //get the last created product
    getLast : (req, res) => {
        db.Product.findOne({
            order: [
                [sequelize.literal('created_at'), 'DESC']
            ],
        })
        .then( result => {
            return res.status(200).json(result);
        })
        .catch( err => { res.status(503).send(err) });
    },

    //get all categories
    getCategories : (req, res) => {
        db.Category.findAll()
        .then( result => {
            return res.status(200).json(result);
        })
        .catch( err => { res.status(503).send(err) });
    } 
};