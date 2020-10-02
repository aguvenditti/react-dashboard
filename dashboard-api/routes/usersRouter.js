const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/quantity', usersController.getQuantity);

module.exports = router;