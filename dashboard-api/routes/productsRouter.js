const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAll);

router.get('/quantity', productsController.getQuantity);

router.get('/price', productsController.getPrice);

router.get('/last', productsController.getLast);

router.get('/categories', productsController.getCategories);


module.exports = router;

