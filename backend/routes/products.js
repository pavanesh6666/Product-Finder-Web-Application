const express = require('express');
const router = express.Router();
const {
    getProducts,
    getFilters,
    getProductById
} = require('../controllers/productController');

// @route   GET /api/products/filters
router.get('/filters', getFilters);

// @route   GET /api/products/:id
router.get('/:id', getProductById);

// @route   GET /api/products
router.get('/', getProducts);

module.exports = router;
